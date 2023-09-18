"use client"
import {Bell, User,Search, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import SideBar from './Sidebar';

const Navbar = () => {
  return (
    <div  className='flex text-black md:mx-[70px]'>
      <div className='flex w-[100%] mt-5 justify-between text-black p-2'>
        <div className='flex'>
          <div className='md:hidden'>
              <Sheet>
              <SheetTrigger>
                  <Button variant='ghost' size='icon' className='md:hidden'>
                      <Menu className=' ml-2 mb-3 cursor-pointer'/>
                  </Button>
              </SheetTrigger>
              <SheetContent side='left' className='p-0'>
                <SideBar />
              </SheetContent>
          </Sheet>
          </div>
          {/* <Menu className='md:hidden mr-5 cursor-pointer ml-2'/> */}
          <h1 className='font-bold text-xl ml-5 md:ml-0 md:text-2xl'>Dashboard</h1>
        </div>
        <div className='flex gap-5 mr-4'>

          <div className='md:bg-[#fff] ml-2 flex p-2 rounded-xl md:w-[180px] h-[30px]'>
            <input type="text" placeholder='Search' className='w-[9rem] hidden md:flex focus:outline-none bg-transparent'/>
            <Search className='md:mt-1 md:mr-2 h-[20px] -[20px] md:h-[12px] md:w-[12px]'/>
          </div>

          <div className='flex gap-3 mt-1'>
            <Bell className='mr-4 md:mr-0'/>
            <User/>
          </div>
            
        </div>
      </div>
    
    </div>
  )
}

export default Navbar