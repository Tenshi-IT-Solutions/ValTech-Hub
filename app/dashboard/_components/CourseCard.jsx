import Image from "next/image";
import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDownOption from "./DropDownOption";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

function CourseCard({ course, refreshData, displayUser = false }) {
  const handleOnDelete = async () => {
    const resp2 = await db
      .delete(Chapters)
      .where(eq(Chapters?.courseID, course?.courseID))
      .returning({ id: CourseList?.id });
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList?.id });

    if (resp && resp2) {
      refreshData();
    }
  };

  return (
    <div className="shadow-sm rounded-lg border p-2 hover:border-primary cursor-pointer mt-4">
      <Link href={"/course/" + course?.courseID} prefetch passHref>
        <Image
          src={course?.courseBanner}
          width={300}
          height={200}
          alt={course?.name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </Link>
      <div className="p-2">
        <h2 className="font-medium text-lg flex items-center justify-between">
          {course?.courseOutput?.CourseName}
          {!displayUser && <DropDownOption handleOnDelete={() => handleOnDelete()}>
            {" "}
            <HiOutlineEllipsisVertical />{" "}
          </DropDownOption>}
        </h2>

        <p className="text-sm text-gray-400 my-1">{course?.category}</p>
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center p-1 bg-purple-50 text-primary text-sm rounded-sm">
            <HiOutlineBookOpen />
            {course?.courseOutput?.NoOfChapters} Chapters
          </h2>
          <h2 className="text-sm bg-purple-50 text-primary p-1 rounded-sm">
            {course?.courseOutput?.Level}
          </h2>
        </div>
        {displayUser && <div className="flex gap-2 items-center mt-2">
          <Image alt="user" src={course?.userProfileImage} width={35} height={35} className="rounded-full" />
          <h2 className="text-sm">{course?.userName}</h2>
        </div>}
      </div>
    </div>
  );
}

export default CourseCard;
