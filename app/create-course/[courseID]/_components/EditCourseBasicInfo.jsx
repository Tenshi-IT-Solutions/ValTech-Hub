import React, { useEffect, useState } from 'react'
import { HiMiniPencilSquare } from "react-icons/hi2";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
  

function EditCourseBasicInfo({course,refreshData}) {
    const [name,setName] = useState();
    const [description,setDescription] = useState();

    useEffect(()=>{
        setName(course?.courseOutput?.CourseName)
        setDescription(course?.courseOutput?.Description)
    },[course])


    const onUpdateHandler = async()=>{
        course.courseOutput.CourseName = name;
        course.courseOutput.Description = description;
        const result = await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.courseID,course?.courseID))
        .returning({id:CourseList.courseID})
        refreshData(true)
    }
  
  return (
    <div>
      <Dialog>
  <DialogTrigger><HiMiniPencilSquare/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Course Title and Description?</DialogTitle>
      <DialogDescription>
        <div className='mt-3'>
            <label htmlFor="">Course Title</label>
            <Input defaultValue={course?.courseOutput?.CourseName} onChange={(e)=>setName(e?.target?.value)} />
        </div>
        <div>
            <label htmlFor="">Description</label>
            <Textarea className='h-40' defaultValue={course?.courseOutput?.Description} onChange={(e)=>setDescription(e?.target?.value)}/>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default EditCourseBasicInfo
