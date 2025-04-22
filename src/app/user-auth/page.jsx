'use client';
import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '@/components/Loader'
import { Button } from "@/components/ui/button"
import { MailOpen } from "lucide-react"
import { toast } from 'react-toastify';

import { signIn } from 'next-auth/react'



const page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const url =process.env.NEXTAUTH_URL;

  const handleLogin = async (provider) => {
    setIsLoading(true);
    try{
      await signIn(provider,{callbackUrl:url})
      toast.info("Redirecting to your dashboard...")
    }
    catch(error){
      toast.error("Login failed. Please try again.")
    }
    finally{
      setIsLoading(false);
    }

  }
  return (
    <div className='flex min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900'>
      {isLoading && <Loader/>}
        <div className='hidden lg:block lg:w-1/2  relative'>
            <Image
                src='/images/meet_image.jpg'
                width={1080}
                height={1080}
                alt='login-img'
                className='object-cover w-full h-full'
            />    
        </div>
        <div className='flex flex-col items-center justify-center w-full lg:w-1/2 p-4'>
          <div className='max-w-md mx-auto'>
            <h1 className='mb-4 text-3xl font-bold text-left text-gray-800 dark:text-white'>
              Welcome to LinkUp
            </h1>
            <p className='mb-6  text-justify text-gray-600 dark:text-gray-400'>
              Connect with your friends and family like never before.
              With crystal clear HD video calls, you can feel like you're right there with them.
            </p>
            <div className='flex flex-col gap-4'>
              <Button className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600' onClick={() => handleLogin('google')}>
                <MailOpen/>Login with Email
              </Button>
              <Button className='w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900' onClick={() => handleLogin('github')}>
                Login with GitHub
              </Button>
            </div>
            <p className='mt-6 text-center text-gray-600 dark:text-gray-400'>
              Don't have an account? <Link href='#' className='text-blue-500 hover:underline'>Create one</Link>
            </p>
          </div>
        </div>
    </div>
    
  )
}

export default page