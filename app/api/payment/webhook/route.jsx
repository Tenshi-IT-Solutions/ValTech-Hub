import { db } from "@/configs/db";
import { PAYMENT_RECORD_TABLE, USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  const webhookSecret = process.env.STRIPE_WEBHOOK_KEY;

  let event;
  let data;
  let eventType;

  if (webhookSecret) {
    const rawBody = await req.text();
    const signature = req.headers.get("stripe-signature");

    try {
      event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
      console.log("✅ Verified event:", event.type);
    } catch (err) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return new NextResponse("Invalid signature", { status: 400 });
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    const body = await req.json();
    console.log("🧪 Raw webhook body:", JSON.stringify(body, null, 2));
    data = body.data.object;
    eventType = body.type;
  }

  console.log("📦 Event Type:", eventType);
  console.log("📧 Customer Email:", data.customer_details?.email || data.customer_email);
  console.log("data:" + data.customer)

  switch (eventType) {
    case "checkout.session.completed": {
      const email = data.customer_details?.email || data.customer_email;
      const customerId = data.customer;
      const sessionId = data.id;

      if (!email) {
        console.warn("⚠️ No email found in webhook payload.");
        break;
      }

      const result = await db
        .update(USER_TABLE)
        .set({
          isMember: true,
          customerId: customerId
        })
        .where(eq(USER_TABLE.email, email));

        await db.update(PAYMENT_RECORD_TABLE).set({
            customerId,
            sessionId
        }).where(eq(PAYMENT_RECORD_TABLE.email, email));

      console.log("✅ User updated in DB:", result);
      break;
    }

    

    case "invoice.paid":
      console.log("💰 Invoice paid.");
      break;

    case "invoice.payment_failed":
      console.log("❌ Invoice payment failed.");
      await db
        .update(USER_TABLE)
        .set({
          isMember: false,
          customerId: customerId
        })
        .where(eq(USER_TABLE.email, email));

        await db.update(PAYMENT_RECORD_TABLE).set({
            customerId,
            sessionId
        }).where(eq(PAYMENT_RECORD_TABLE.email, email));
      break;

    default:
      console.log(`❓ Unhandled event type: ${eventType}`);
  }

  return NextResponse.json({ received: true });
}
