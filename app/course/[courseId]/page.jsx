'use client'
import ChapterList from '@/app/create-course/[courseID]/_components/ChapterList'
import CourseBasicInfo from '@/app/create-course/[courseID]/_components/CourseBasicInfo'
import CourseDetail from '@/app/create-course/[courseID]/_components/CourseDetail'
import Header from '@/app/dashboard/_components/Header'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState, use } from 'react'

function Course({params}) {

    const [course,setCourse] = useState()
    const courseParams = use(params);
    

    useEffect(()=>{
        params&&getCourse();
    },[params])

    const getCourse= async()=>{
        const result = await db.select().from(CourseList).where(eq(CourseList?.courseID,courseParams.courseId))
        setCourse(result[0])
        console.log(result)
    }
  return (
    <div>
        <Header/>
        <div className='px-10 p-10 md:px-20 lg:px-44'>
            <CourseBasicInfo course={course} edit={false}/>
            <CourseDetail course={course} />
            <ChapterList course={course} edit={false} />
        </div>
        
    </div>
  )
}

export default Course
