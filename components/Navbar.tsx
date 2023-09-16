import { useEffect,useState } from 'react'
import {Bell, User,Search } from 'lucide-react'
import axios from 'axios';

const Navbar = () => {

  return (
    <div  className='flex text-black '>
      <div className='flex w-[100%] mt-5 justify-between text-black p-2'>
        <div>
          <h1 className='font-bold text-2xl'>Dashboard</h1>
        </div>
        <div className='flex gap-5 mr-4'>

          <div className='bg-[#fff]  flex p-2 rounded-xl w-[180px] h-[30px]'>
            <input type="text" placeholder='Search' className='w-[9rem] focus:outline-none bg-transparent'/>
            <Search className='mt-1 mr-2 h-[12px] w-[12px]'/>
          </div>

          <div className='flex gap-3 mt-1'>
            <Bell/>
            <User/>
          </div>
            
        </div>
      </div>
    
    </div>
  )
}

export default Navbar