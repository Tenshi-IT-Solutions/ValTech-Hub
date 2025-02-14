import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
      <Image src={'/valtech.png'} width={150} height={200}></Image>
      <Button>Get Started</Button>
    </div>
  )
}

export default Header
