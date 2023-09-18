"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {


  return (
    <main className="flex md:flex-row flex-col min-h-screen bg-[#F5F5F5]">

       <div className=' flex p-4 md:p-0 md:justify-center items-center md:w-2/5 bg-black'>
          <h1 className='font-sans text-2xl md:text-7xl  text-white '>Target.</h1>
       </div>

       <div className='md:w-3/5 flex mt-[100px]  md:mt-[0px] flex-col justify-center items-center bg-[#F5F5F5] text-black'>
         <div className=' md:w-[385px]'>
            <div>
               <h1 className='text-4xl font-bold'>Sign In</h1>
               <p className='text-sm'>Sign in to your account</p>
            </div>

            <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-3 mb-3'>
               <div className='bg-white p-2 rounded-lg flex gap-2 cursor-pointer' onClick={()=>signIn('google')}>
                  <Image src='/google.png' alt='google' width={22} height={10}/>
                  <p className='font-semibold md:font-normal'>sign in with Google </p> 
               </div>
               <div className='bg-white p-2 rounded-lg flex gap-2 cursor-pointer'>
                  <Image src='/apple.png' alt='apple'  width={20} height={10}/>
                  <p className='font-semibold md:font-normal'>sign in with apple </p> 
               </div>
            </div>

            <div className='flex flex-col bg-[#fff] p-4 rounded-xl'>
               <div className='flex flex-col p-4'>
                  <label className='font-medium'>Email address</label>
                  <input className='focus:outline-none rounded-xl p-2 bg-[#F5F5F5]' type="email" />
               </div>
               <div className='flex flex-col p-4'>
                  <label  className='font-medium'>Password</label>
                  <input  className='focus:outline-none rounded-xl p-2 bg-[#EAEAEA]' type="password" />
               </div>
               <div className=' flex flex-col p-4'>
                  <a className='text-blue-500 cursor-pointer text-sm'>Forgot password?</a>
                 <button className='p-2 bg-black text-white rounded mt-4'>Sign In</button>
               </div>
               
            </div>

            <div className='mt-7 text-center'>
               <p>Dont have an account? <a className='text-blue-600 cursor-pointer'>Register here</a></p>
            </div>
         </div>
        

       </div>
       <div className='absolute top-3 right-5'>
         <Link href='/dashboard'>
         <Button>Dashboard</Button>
         </Link>
       </div>

    </main>
  )
}