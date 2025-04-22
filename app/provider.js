'use client'
import { db } from '@/configs/db';
import { PAYMENT_RECORD_TABLE, USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({children}) {
    const {user} = useUser();

    useEffect(()=>{
        user&&CheckIsNewUser();
    },[user])

    const CheckIsNewUser = async()=>{
        const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))
        if(result?.length == 0){
            await db.insert(USER_TABLE).values({
                name:user?.fullName,
                email:user?.primaryEmailAddress?.emailAddress
            }).returning({id:USER_TABLE.id})
            await db.insert(PAYMENT_RECORD_TABLE).values({
                email:user?.primaryEmailAddress?.emailAddress
            }).returning({id:PAYMENT_RECORD_TABLE.id})
        }
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
