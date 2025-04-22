'use client'

import { UserCourseListContext } from '@/app/_context/UserCourseList'
import { Button } from '@/components/ui/button'
import { db } from '@/configs/db'
import { USER_TABLE } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

function AddCourse() {
  const { user } = useUser()
  const { userCourseList } = useContext(UserCourseListContext)

  const [isMember, setIsMember] = useState(false)

  useEffect(() => {
    const checkMembership = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return
      const result = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, user.primaryEmailAddress.emailAddress))

      if (result.length > 0 && result[0].isMember) {
        setIsMember(true)
      }
    }

    checkMembership()
  }, [user])

  const shouldUpgrade = userCourseList.length >= 5 && !isMember

  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-3xl'>
          Hello, <span className='font-bold'>{user?.fullName}</span>
        </h2>
        <p className='text-sm text-gray-500'>
          Create new course with AI, share with friends, and earn from it
        </p>
      </div>
      <Link href={shouldUpgrade ? '/dashboard/upgrade' : '/create-course'} prefetch passHref>
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  )
}

export default AddCourse
