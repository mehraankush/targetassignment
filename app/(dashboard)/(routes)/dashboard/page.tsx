"use client"
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import  Graph  from "@/components/Chart";
import axios from 'axios'


interface User {
  title: string;
  value: number;
}

const page = () => {

  const [cardData,setCardData] = useState<User[]>([]);

  useEffect(()=>{
    resuestData();
  },[]);


  const resuestData = async()=>{
    try {
      const res = await axios.get('https://api.npoint.io/e7268b28c20d13b52e97');
      const data = res.data.data;
      setCardData(data);
      console.log('Data:', data);
      console.log('Card Data:', cardData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  return (
    <div className="min-h-screen">
      <div className="flex justify-around mt-5">
      {
        cardData?.map((item)=>(
            <Card title={item.title} value={item.value}/>
        ))
      }
      </div>
      <div className="bg-white p-2 ">
          <Graph/>
      </div>
    </div>
  )
}

export default page