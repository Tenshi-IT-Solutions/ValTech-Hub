'use client'
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { use } from "react";
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';
import Header from '@/app/dashboard/_components/Header';

function CourseStart({ params }) {

    const courseParams = use(params);
    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();

    useEffect(() => {
        GetCourse();
    }, []);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList).where(eq(CourseList?.courseID, courseParams?.courseId));

        setCourse(result[0]);
        setSelectedChapter(0);
        GetSelectedChapterContent(0);
    };

    const GetSelectedChapterContent = async (chapterId) => {
        const result = await db.select().from(Chapters).where(and(eq(Chapters.chapterID, chapterId), eq(Chapters.courseID, course?.courseID)));
        setChapterContent(result[0]);
        console.log('selected chapter' + result[0])
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Sticky Header */}
            <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
                <Header />
            </header>

            {/* Sidebar & Content Layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="md:w-64 hidden md:flex flex-col border-r shadow-sm bg-white overflow-y-auto ">
                    <h2 className="font-medium text-lg bg-primary p-4 text-white">{course?.courseOutput?.CourseName}</h2>

                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        {course?.courseOutput?.Chapters.map((chapter, index) => (
                            <div 
                                key={index} 
                                className={`cursor-pointer hover:bg-purple-50 ${selectedChapter?.ChapterName == chapter?.ChapterName && 'bg-purple-100'}`}  
                                onClick={() => { setSelectedChapter(chapter); GetSelectedChapterContent(index); }}
                            >
                                <ChapterListCard chapter={chapter} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto p-6">
                    <ChapterContent chapter={selectedChapter} content={chapterContent} />
                </div>
            </div>
        </div>
    );
}

export default CourseStart;
