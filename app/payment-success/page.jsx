'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

 function PaymentSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">🎉 Payment Successful!</h1>
        <p className="text-lg mt-2 text-gray-600">Thank you for your purchase.</p>
        <p className="text-sm mt-1 text-gray-400">Redirecting to your dashboard in 5 seconds...</p>
      </div>
    </div>
  )
}

export default PaymentSuccessPage