import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-8 shadow-sm'>
      <Image src={'/favicon.png'} alt='valtech' width={36} height={36} />
      <UserButton />
    </div>
  )
}

export default Header
