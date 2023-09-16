"use client"

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { Tags,UserCircle2, LayoutDashboard, MessageSquare, Settings, CalendarClock } from "lucide-react";

const montserrat = Montserrat({weight:'600',subsets:['latin']}) 
const routes = [
  {
  lable:"Dashboard",
  icon:LayoutDashboard,
  href:"/dashboard",
  },
  {
  lable:"Transactions",
  icon:Tags,
  href:"/conversation",
  },
  {
  lable:"Schedules",
  icon:CalendarClock,
  href:"/image",
  },
  {
  lable:"Users",
  icon:UserCircle2,
  href:"/video",
  },
  {
  lable:"Settings",
  icon:Settings,
  href:"/music",
  }
];

const SideBar = () => {


  const pathname = usePathname();
  return (
    <div className="my-5 py-4 ml-10 md:w-60 flex flex-col justify-between md:h-[944px] text-white bg-black rounded-[30px]"> 
       <div className="px-3 py-2 flex-1">
          <Link href='/dashboard' className="flex items-center pl-3 mb-14 ">
              <h1 className={`text-4xl  font-bold`}>Target.</h1>
          </Link>
          <div className="space-y-1">
             {
              routes.map((item)=>(
                <Link
                  href={item.href}
                  key={item.href}
                  className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    ${pathname === item.href?'font-bold':'font-normal'}`
                  }
                >
                 <div className="flex items-center flex-1">
                     <item.icon className={`h-5 w-5 mr-3`}/>
                     {item.lable}
                 </div>
                </Link>
              ))
             }
          </div>
          <div className="mt-[13rem] p-2">
             <p className="mb-2">Help</p>
             <p>Contact Us</p>
          </div>
       </div>
    </div>
  )
}
 
export default SideBar;