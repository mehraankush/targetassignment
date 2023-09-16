import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen">

       <div className=' flex justify-center items-center w-2/5 bg-black'>
          <h1 className='font-sans text-7xl'>Target.</h1>
       </div>

       <div className='w-3/5 flex flex-col justify-center items-center bg-[#F5F5F5] text-black'>
         <div className=' md:w-[385px]'>
            <div>
               <h1 className='text-4xl font-bold'>Sign In</h1>
               <p className='text-base'>Sign in to your account</p>
            </div>

            <div className='flex justify-between mt-3 mb-3'>
               <p>Google </p> 
               <p>Google </p> 
            </div>

            <div className='flex flex-col bg-[#fff] p-4 rounded'>
               <div className='flex flex-col'>
                  <label>Email address</label>
                  <input className='focus:outline-none rounded p-2 bg-[#F5F5F5]' type="email" />
               </div>
               <div className='flex flex-col mt-3'>
                  <label>Password</label>
                  <input  className='focus:outline-none rounded p-2 bg-[#EAEAEA]' type="password" />
               </div>
               <div className='mt-2'>
                  <a className='text-blue-500 cursor-pointer'>Forgot password?</a>
               </div>
               <button className='p-2 bg-black text-white rounded mt-4'>Sign In</button>
            </div>

            <div className='mt-7 text-center'>
               <p>Dont't have an account? <a className='text-blue-600 cursor-pointer'>Register here</a></p>
            </div>
         </div>
        

       </div>

    </main>
  )
}