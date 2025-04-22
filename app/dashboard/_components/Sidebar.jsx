'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import {
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { Progress } from "@/components/ui/progress"
import { UserCourseListContext } from '@/app/_context/UserCourseList';

function Sidebar({ onClose }) {
  const { userCourseList } = useContext(UserCourseListContext)
  const path = usePathname()

  const Menu = [
    { id: 1, name: 'Home', icon: <HiOutlineHome />, path: '/dashboard' },
    { id: 2, name: 'Explore', icon: <HiOutlineSquare3Stack3D />, path: '/dashboard/explore' },
    { id: 3, name: 'Upgrade', icon: <HiOutlineShieldCheck />, path: '/dashboard/upgrade' },
    { id: 4, name: 'User Profile', icon: <HiOutlineShieldCheck />, path: '/user-profile' }
  ]

  return (
    <div className='h-full md:w-64 p-5 shadow-md bg-white'>
      <Image src={'/valtech.png'} alt='valtech' width={160} height={100} />
      <hr className='my-5' />

      <ul>
        {Menu.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            onClick={() => {
              if (onClose) onClose()
            }}
          >
            <div
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.path === path ? 'bg-gray-100 text-black' : ''
              }`}
            >
              <div className='text-2xl'>{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      {userCourseList?.length <= 5 && (
        <div className='absolute bottom-10 w-[80%]'>
          <Progress value={(userCourseList.length / 5) * 100} />
          <h2 className='text-sm my-2'>{userCourseList.length} out of 5 Course created</h2>
          <h2 className='text-xs text-gray-500'>
            Upgrade your plan for unlimited course generation
          </h2>
        </div>
      )}
    </div>
  )
}

export default Sidebar
