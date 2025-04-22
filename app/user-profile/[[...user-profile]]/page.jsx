'use client'
import Header from "@/app/_components/Header";
import { UserCourseListContext } from "@/app/_context/UserCourseList";
import Sidebar from "@/app/dashboard/_components/Sidebar";
import { UserProfile } from "@clerk/nextjs";
import { useState } from "react";

const UserProfilePage = () => {
  const [userCourseList,setUserCourseList] = useState([])
  return (
    <UserCourseListContext.Provider value={{userCourseList,setUserCourseList}}>
    <div>
        <div className='md:w-64 hidden md:block'>
            <Sidebar></Sidebar>
        </div>
        <div className='md:ml-64'>
            <Header />
            <div className='p-10'>
            <UserProfile/>
            </div>
        </div>
    </div>
    </UserCourseListContext.Provider>
  );
};

export default UserProfilePage;
