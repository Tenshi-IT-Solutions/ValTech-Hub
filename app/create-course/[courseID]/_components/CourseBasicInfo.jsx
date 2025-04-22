import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/firebaseConfig";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

function CourseBasicInfo({ course, refreshData, edit = true }) {
  const [selectedFile, setSelectedFile] = useState();
  console.log('course='+course?.courseID)

  useEffect(() => {
    if (course) {
      setSelectedFile(course?.courseBanner);
    }
  }, [course]);

  /**
   * Select file and upload to firebase storage
   * @param {*} event
   */

  // const onFileSelected = async (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(URL.createObjectURL(file));
  //   const fileName = Date.now() + ".jpg";
  //   const storageRef = ref(storage, "ai-course/", fileName);
  //   await uploadBytes(storageRef, file)
  //     .then((snapshot) => {
  //       console.log("Upload file completed");
  //     })
  //     .then((resp) => {
  //       getDownloadURL(storageRef).then(async (downloadUrl) => {
  //         await db
  //           .update(CourseList)
  //           .set({
  //             courseBanner: downloadUrl,
  //           })
  //           .where(eq(CourseList?.courseID, course?.courseID));
  //       });
  //     });
  // };

  const onFileSelected = async (event) => {
    try {
        const file = event.target.files[0];
        // initially updating state for fast response
        setSelectedFile(URL.createObjectURL(file));
        if (!file) return;

        // Generate a unique filename
        const fileName = `${Date.now()}.jpg`;

        // Correct storage reference path
        const storageRef = ref(storage, `ai-course/${fileName}`);

        // Upload file to Firebase Storage
        await uploadBytes(storageRef, file);
        console.log("File upload completed");

        // Get Download URL
        const downloadUrl = await getDownloadURL(storageRef);

        // Update the state with selected file URL
        setSelectedFile(downloadUrl);

        // Update the database with the new course banner URL
        await db
            .update(CourseList)
            .set({ courseBanner: downloadUrl })
            .where(eq(CourseList.courseID, course?.courseID));

        console.log("Database updated with new banner URL");

    } catch (error) {
        console.error("Error uploading file:", error);
    }
};

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-2xl flex-none">  {course?.courseOutput?.CourseName}
            {edit&&<EditCourseBasicInfo refreshData={() => refreshData(true)} course={course} className="flex-none" />}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {course?.courseOutput?.Description}
          </p>
          <h2 className="font-medium mt-5 flex gap-2 items-center text-primary">
            <HiOutlinePuzzle />
            {course?.category}
          </h2>
          {!edit&&<Link href={'/course/'+course?.courseID+'/start'}>
            <Button className="w-full mt-5">Start</Button>
          </Link>}
        </div>
        <div>
          <label htmlFor="upload-image">
            <Image
              src={
                selectedFile || course?.courseBanner || "/placeholder.png"
              }
              alt="placeholder"
              width={300}
              height={300}
              className="w-full rounded-xl h-[250px] object-cover cursor-pointer"
            />
          </label>
          {edit&&<input
            type="file"
            id="upload-image"
            className="opacity-0"
            onChange={onFileSelected}
          />}
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
