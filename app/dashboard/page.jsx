import React from 'react'
import AddCourse from './_components/AddCourse'
import CourseCard from './_components/CourseCard'
import UserCourseList from './_components/UserCourseList'


function dashboard() {
  return (
    <div>
        <AddCourse />

        {/* Display List of Course */}
        <UserCourseList />
       
    </div>
  )
}

export default dashboard
