'use client'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo'
import EditCourseBasicInfo from '../_components/EditCourseBasicInfo'
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { use } from "react";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"


function FinishScreen({params}) {
  const courseParams = use(params);
  const {user} = useUser()
    const [course,setCourse] = useState([])
    
    const router = useRouter()

    useEffect(()=>{
      courseParams && GetCourse()

    },[courseParams,user])

    const GetCourse = async()=>{
        const result = await db.select().from(CourseList).where(and(eq(CourseList.courseID,courseParams?.courseID),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
        setCourse(result[0])
        
    }
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
      <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats! Your Course is Ready.</h2>
      
      <CourseBasicInfo course={course} refreshData={()=>console.log()} edit={false} />
      <h2 className='mt-3'>Course URL:</h2>
      <h2 className='text-center hover:text-primary cursor-pointer text-gray-400 border p-2 rounded-md flex gap-5 items-center' onClick={async()=> {await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME + '/course/' + course?.courseID); toast("Copied")}}>{process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseID} <HiOutlineClipboardDocumentCheck className='h-5 w-5 cursor-pointer' /></h2>
      <Toaster />
    </div>
  )
}

export default FinishScreen
