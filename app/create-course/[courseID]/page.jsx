'use client'
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '@/components/ui/button'
import { GenerateChapterContent_AI } from '@/configs/AiModel'
import LoadingDialog from '../_components/LoadingDialog'
import service from '@/configs/service'
import { useRouter } from 'next/navigation'
import { use } from "react";

function CourseLayout({params}) {
    const {user} = useUser()
    const [course,setCourse] = useState([])
    const [loading,setLoading] = useState(false)
    const courseParams = use(params);
    const router = useRouter()

    useEffect(()=>{
      courseParams && GetCourse()

    },[courseParams,user])

    const GetCourse = async()=>{
        const result = await db.select().from(CourseList).where(and(eq(CourseList.courseID,courseParams?.courseID),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
        setCourse(result[0])
        
        
    }
    
    // const GenerateChapterContent = ()=>{
    //   setLoading(true)
    //   const chapters = course?.courseOutput?.Chapters;
    //   chapters.forEach(async(chapter,index) => {
    //     const PROMPT = 'Explain the concept in Detail on Topic:'+course?.name+', Chapter:'+chapter?.ChapterName+', in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable';
        

        
    //       try{
    //         // Generate Video Url 
    //         let videoId = ''
    //         service.getVideos(course?.name+':'+chapter?.ChapterName).then(resp=>{
              
    //            videoId = resp[0]?.id?.videoId
    //         })

    //         // Generate Chapter Content
    //         const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
            
    //         const content = JSON.parse(result?.response?.text())
            
            

    //         // Save Chapter Content + Video Url 
    //         await db.insert(Chapters).values({
    //           chapterID:index,
    //           courseID:course?.courseID,
    //           content:content,
    //           videoID:videoId
    //         })

    //         setLoading(false)
    //       }
    //       catch(e){
    //         setLoading(false)
    //         console.log(e)
    //       }
    //       await db.update(CourseList).set({
    //         publish:true
    //       })
    //       router.replace('/create-course/'+course?.courseID+'/finish')
        
    //   });
    // }


    // 2nd Method
    
    const GenerateChapterContent = async () => {
      setLoading(true);
      
      const chapters = course?.courseOutput?.Chapters;
      if (!chapters || chapters.length === 0) {
        setLoading(false);
        return;
      }
    
      try {
        for (const [index, chapter] of chapters.entries()) {
          const PROMPT = `Explain the concept in Detail on Topic: ${course?.name}, Chapter: ${chapter?.ChapterName}.
          Return a **valid JSON** formatted as:
          {
            "topic":"Chapter Title Here"
            "sections": [
              {
                "title": "Title here",
                "description": "Detailed explanation",
                "code_example": "<precode>example code</precode>"
              }
            ]
          }`;
    
          let videoId = '';
          
          try {
            
            const query = `${course?.name} ${chapter?.ChapterName}`.trim();
            // const resp = await service.getVideos(`${course?.name}:${chapter?.ChapterName}`);
            const resp = await service.getVideos(query);
            videoId = resp?.[0]?.id?.videoId || '';
          } catch (videoError) {
            console.error('Error fetching video:', videoError);
          }
    
          let content = null;
          try {
            const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
            let rawText = await result?.response?.text();
            console.log("Raw AI Output:", rawText);
    
            let fixedJSON = rawText.replace(/,\s*([\]}])/g, '$1');  
            
            content = JSON.parse(fixedJSON);
            console.log("Parsed Content:", content);
    
          } catch (contentError) {
            console.error('Error generating chapter content:', contentError);
            continue;  
          }
    
          
          await db.insert(Chapters).values({
            chapterID: index,
            courseID: course?.courseID,
            content: content,
            videoID: videoId
          });
        }
    
        await db.update(CourseList).set({
          publish: true
        });
    
        router.replace(`/create-course/${course?.courseID}/finish`);
    
      } catch (e) {
        console.error('Error processing chapters:', e);
      } finally {
        setLoading(false);
      }
    };
    
    
    
    
    
    
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

      <LoadingDialog loading={loading} />

      {/* Basic Info  */}
      <CourseBasicInfo refreshData= {()=>GetCourse()} course={course} />

      {/* Course Detail  */}
      <CourseDetail course={course} />

      {/* List of Lessons  */}
      <ChapterList refreshData={()=>GetCourse()} course={course} />

        <Button onClick={GenerateChapterContent} className="my-10">Generate Course Content</Button>

    </div>
  )
}

export default CourseLayout
