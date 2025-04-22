import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center p-6 shadow-sm">
      <Image
        className="hidden md:block max-h-16 w-auto"
        src="/valtech.png"
        alt="valtech"
        width={150}
        height={200}
      />
      <div className="flex items-center justify-between md:justify-end md:gap-20 w-full">
  <div>
    <Link href="/dashboard">
      <Button className="w-auto h-auto">Dashboard</Button>
    </Link>
  </div>
  <UserButton
    appearance={{
      elements: {
        userButtonAvatarBox: 'w-12 h-12',
      },
    }}
  />
</div>

    </div>
  )
}

export default Header
