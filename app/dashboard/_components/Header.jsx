import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-8 shadow-sm'>
      <Image src={'/valtech.png'} alt='valtech' width={150} height={200} />
      <div className='flex items-center gap-20'>
        <Link href={'/dashboard'}>
        <Button>Dashboard</Button>
        </Link>
        <UserButton appearance={{
        elements: {
          userButtonAvatarBox: "w-12 h-12", 
        },
      }} />
      </div>
      
    </div>
  )
}

export default Header
