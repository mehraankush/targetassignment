"use client"
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import  Graph  from "@/components/Chart";
import axios from 'axios'
import { ChevronDown,ChevronRight, Dot } from 'lucide-react'
import PieCharts from "@/components/PieChart";
import ChartDisplay from "@/components/GrapthDisplay";


interface User {
  title: string;
  value: number;
}
interface Schedule {
  meetingTitle: string;
  time: string;
  location: string;
}

const COLORS = ["#f4ecdd","#ddefe0", "#F6DC7D"];

const Page = () => {

  const [cardData,setCardData] = useState<User[]>([]);
  const [schedule,setSchedule] = useState<Schedule[]>([]);
  const [pieChartData, setpieChartData] = useState({})

  useEffect(()=>{
    resuestData();
  },[]);

  const keys = Object.keys(pieChartData);
  const values = Object.values(pieChartData);

  const resuestData = async()=>{
    try {
      const res = await axios.get('https://api.npoint.io/e7268b28c20d13b52e97');
      const data = res.data.data;
      const todaySchedule = res.data.todaysSchedule;
      const pieData = res.data.pieChartData;
      setCardData(data);
      setSchedule(todaySchedule)
      setpieChartData(pieData)

      console.log('Data:', data);
      console.log('Card Data:', cardData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  return (
    <div className="min-h-screen">
      <div className="flex justify-around mt-5 mx-10">
      {
        cardData?.map((item,i)=>(
            <Card key={i} title={item.title} value={item.value} Styles={`bg-[${COLORS[i%COLORS.length]}]`}/>
        ))
      }
      </div>

      {/* graph  */}
      <div className="w-full flex justify-center items-center">
          <ChartDisplay/>
      </div>

 {/* Bottom Section   */}
      
      <div className="flex justify-around mt-10 ">
         
         <div className="flex flex-col  bg-white text-black md:p-7 mb-5 rounded-[20px] md:w-[480px] md:h-[256px]">
            <div className="flex justify-between">
                 <h1 className="font-semibold">Top products</h1>
                 <div className="flex gap-1">
                    <p className="text-xs mt-1">May-June2021</p>
                    <ChevronDown fill="text-gray-500"/>
                 </div>
            </div>

            <div className="flex mt-5 justify-between">
               <div className="p-2">
                  <PieCharts/>
               </div>
               <div className="flex text-black flex-col gap-3 p-3 ">
               {
                    keys.map((chart, i) => (
                    <div key={i}>
                      <div className="flex text-xs font-bold">
                         <Dot/>
                         <p>{chart}</p>
                      </div>
                      <p className="text-xs text-gray-500 md:ml-5">{values[i]}%</p>
                    </div>
                    ))
                  }
                </div>
            </div>
         </div>
      {/* second part  */}
      <div className="flex flex-col bg-white text-black md:p-10 mb-5 rounded-[20px] md:w-[480px] md:h-[256px]">
            <div className="flex justify-between">
                 <h1 className="font-semibold">Today’s schedule</h1>
                 <div className="flex gap-1">
                    <p className="text-xs mt-1">See All</p>
                    <ChevronRight fill="text-gray-500"/>
                 </div>
            </div>
         
         <div className="p-4">
          {
            schedule.map((today,i)=>(
               <div key={i} className="mt-3 border-l-4 border-blue-800">
                <div className="ml-2">
                 <p className="text-sm">{today.meetingTitle}</p>
                 <p className="text-xs">{today.time}</p>
                 <p className="text-xs">{today.location} </p>
               </div>
             </div>
            ))
          }
         </div>
         
         </div>

      </div>
    </div>
  )
}

export default Page