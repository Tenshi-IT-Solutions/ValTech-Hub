'use client'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button';
import CourseCard from '../dashboard/_components/CourseCard';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';

function Explore() {

  const [courseList,setCourseList] = useState([]);
  const [pageIndex,setPageIndex] = useState(0);
  
  useEffect(()=>{
    GetAllCourse();
  },[pageIndex])
  const GetAllCourse = async()=>{
    const result = await db.select().from(CourseList).limit(9).offset(pageIndex * 9)
    setCourseList(result)
  }

  return (
    <main className="min-h-screen bg-background">
          <Navbar />
          <div className='my-28 mx-10'>
        <h2 className='font-bold text-3xl'>Explore More Projects</h2>
        <p>Explore more projects build with AI by other users</p>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
          
          {courseList?.length > 0 ? courseList?.map((course,index)=>(
            <div key={index}>
              <CourseCard course={course} displayUser = {true} />
            </div>
          )) : [1,2,3,4,5,6].map((item,index)=>(
              <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]'>

              </div>
              ))}
        </div>
        <div className='flex justify-between mt-5'>
          {pageIndex!=0 && <Button onClick= {()=>setPageIndex(pageIndex-1)}>Previous Page</Button>}
          
          <Button onClick= {()=>setPageIndex(pageIndex+1)}>Next Page</Button>
        </div>
    </div>
          <Footer />
        </main>
    
  )
}

export default Explore
