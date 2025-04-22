import React, { useState,useEffect } from 'react'
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
import { eq } from 'drizzle-orm';
import { CourseList } from '@/configs/schema';

function EditChapters({course,index,refreshData}) {

    const chapters = course?.courseOutput?.Chapters
    const [name,setName] = useState()
    const [about,setAbout] = useState()

    useEffect(()=>{
            setName(chapters[index]?.ChapterName)
            setAbout(chapters[index]?.About)
        },[course])

    const onUpdateHandler = async()=>{
        course.courseOutput.Chapters[index].ChapterName = name
        course.courseOutput.Chapters[index].About = about
        const result = await db.update(CourseList).set({
                    courseOutput:course?.courseOutput
                }).where(eq(CourseList?.id,course?.id))
                .returning({id:CourseList.id})
            refreshData(true)
        }

  return (
    <div>
      <Dialog>
  <DialogTrigger><HiMiniPencilSquare/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Chapter</DialogTitle>
      <DialogDescription>
        <div className='mt-3'>
                    <label htmlFor="">Course Title</label>
                    <Input defaultValue={chapters[index]?.ChapterName} onChange={(e)=>setName(e?.target?.value)} />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <Textarea className='h-40' defaultValue={chapters[index]?.About} onChange={(e)=>setAbout(e?.target?.value)}/>
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

export default EditChapters
