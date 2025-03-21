'use client'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '@/components/ui/button'

function CourseLayout({params}) {
    const {user} = useUser()
    const [course,setCourse] = useState([])

    useEffect(()=>{
        params && GetCourse()

    },[params,user])

    const GetCourse = async()=>{
        const result = await db.select().from(CourseList).where(and(eq(CourseList.courseID,params?.courseID),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
        setCourse(result[0])
        
    }
    
    const GenerateChapterContent = ()=>{
      
    }
    
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

      {/* Basic Info  */}
      <CourseBasicInfo refreshData= {()=>GetCourse()} course={course} />

      {/* Course Detail  */}
      <CourseDetail course={course} />

      {/* List of Lessons  */}
      <ChapterList refreshData={()=>GetCourse()} course={course} />

        <Button className="my-10">Generate Course Content</Button>

    </div>
  )
}

export default CourseLayout
