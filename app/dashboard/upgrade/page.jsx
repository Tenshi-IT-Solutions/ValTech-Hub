"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { eq } from "drizzle-orm";

import React, { useEffect, useState } from "react";


function Upgrade() {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    user && GetUserDetails();
  }, [user]);

  const GetUserDetails = async () => {
    try {
      if (!user?.primaryEmailAddress?.emailAddress) {
        console.warn("User email not available");
        return;
      }
  
      const result = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, user.primaryEmailAddress.emailAddress));
  
      if (result.length > 0) {
        setUserDetail(result[0]);
        console.log("User Details:", result[0]);
      } else {
        console.warn("No user found with that email.");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  

  const onCheckoutClick = async () => {
    const result = await axios.post("/api/payment/checkout", {
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
    });

    window.open(result.data?.session?.url);
  };

  const onPaymentManage = async () => {
    if (!userDetail?.customerId) {
      console.warn("Customer ID not found in user details.");
      return;
    }
  
    try {
      const result = await axios.post("/api/payment/manage-payment", {
        customerId: userDetail.customerId,
      });
  
      // Optional: redirect to billing portal URL if returned
      if (result.data?.url) {
        window.location.href = result.data.url;
      } else {
        console.log("Response:", result.data);
      }
    } catch (error) {
      console.error("Error managing payment:", error);
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row justify-center gap-20 mt-10">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-10 sm:p-10 text-center bg-white dark:bg-zinc-900">
        
        <p className="text-base font-semibold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Free
        </p>

        <span className="text-5xl  font-bold text-black-600 dark:text-neutral-400">
          $0/</span><span className="text-sm text-neutral-600 dark:text-neutral-400">month</span>
          <div className="mx-10">
          <ul className="text-base text-left sm:text-md text-black mt-4 mb-2 dark:text-neutral-200">
          <li>✔ 5 Course Generation</li>
          <li>✔ Limited Suppport</li>
          <li>✔ Email Generation</li>
          <li>✔ Help Center Access</li>
        </ul>
        { userDetail?.isMember == false ? (<p className="text-primary p-4" >Current Plan</p>) : (<p className="text-primary p-4" >Upgraded</p>)}
        <div className="m-2">
        {userDetail?.isMember == false ? (
        <Button onClick={onCheckoutClick}>Upgrade</Button> 
      ) : (
        <Button onClick={onPaymentManage}>Manage Payments</Button>
      )}
        </div>
          </div>
      
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-10 sm:p-10 text-center bg-white dark:bg-zinc-900">
        
        <p className="text-base font-semibold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Monthly
        </p>

        <span className="text-5xl  font-bold text-black-600 dark:text-neutral-400">
          $9.99/</span><span className="text-sm text-neutral-600 dark:text-neutral-400">month</span>
          <div className="mx-10">
          <ul className="text-base text-left sm:text-md text-black mt-4 mb-2 dark:text-neutral-200">
          <li>✔ Unlimited Course Generation</li>
          <li>✔ Priority Support 24/7</li>
          <li>✔ Regular Feature Updates</li>
          <li>✔ Early Access to New Tools</li>
        </ul>
        { userDetail?.isMember == true ? (<p className="text-primary p-4" >Current Plan</p>) : (<p className="text-primary p-4" >Upgrade</p>)}
        <div className="m-2">
        {userDetail?.isMember == false ? (
        <Button onClick={onCheckoutClick}>Upgrade</Button> 
      ) : (
        <Button onClick={onPaymentManage}>Manage Payments</Button>
      )}
        </div>
          </div>
      
      </BackgroundGradient>
      
      
    </div>
  );
}

export default Upgrade;
