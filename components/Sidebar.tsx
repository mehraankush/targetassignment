"use client"

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const montserrat = Montserrat({weight:'600',subsets:['latin']}) 
const routes = [
  {
  lable:"Dashboard",
  icon:LayoutDashboard,
  href:"/dashboard",
  color:"text-sky-500"
  },
  {
  lable:"Transactions",
  icon:MessageSquare,
  href:"/conversation",
  color:"text-violet-500"
  },
  {
  lable:"Schedules",
  icon:ImageIcon,
  href:"/image",
  color:"text-pink-700"
  },
  {
  lable:"Users",
  icon:VideoIcon,
  href:"/video",
  color:"text-orange-700"
  },
  {
  lable:"Settings",
  icon:Music,
  href:"/music",
  color:"text-emerald-500"
  }
];

interface SideBarProps{
 getCount:number;
 isPro:boolean;
}

const SideBar = () => {


  const pathname = usePathname();
  return (
    <div className="my-2 py-4  md:w-60 flex flex-col h-4/5 text-white bg-black rounded"> 
       <div className="px-3 py-2 flex-1">
          <Link href='/dashboard' className="flex items-center pl-3 mb-14">
              <div className="relative w-8 h-8 mr-4">
                  <Image src='/logoai.png' alt="Logo" height={20} width={20}/>
              </div>
              <h1 className={`text-2xl font-bold ${montserrat.className}`}>JustAsk</h1>
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
                     <item.icon className={`h-5 w-5 mr-5${item.color}`}/>
                     {item.lable}
                 </div>
                </Link>
              ))
             }
          </div>
          <div>
            
          </div>
       </div>
    </div>
  )
}
 
export default SideBar;