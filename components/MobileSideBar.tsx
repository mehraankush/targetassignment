import { Menu } from 'lucide-react'

import { Button } from './ui/button'

import {Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideBar from './Sidebar'

interface MobileSideBarProps {
  getCount:number;
  isPro:boolean;
}

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent side='left' className='p-0'>
          <SideBar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar