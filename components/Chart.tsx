"use client"
import React ,{useEffect, useState} from "react";
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from "recharts";

var data:any = [];

const Graph = (graphgdata:any) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

     const GrapgAllData =  graphgdata.graphgdata.graphgdata;
     const GraphData = graphgdata.graphgdata.graphgdata.User;
     console.log(GraphData)

    if (typeof GraphData === 'object' && GraphData !== null) {
      const weeks = Object.keys(GraphData);
      console.log(weeks)
          data = weeks.map(week => ({
          "name": week,
          "User": GrapgAllData.User[week],
          "Guest": GrapgAllData.Guest[week]
        }));
    }

      useEffect(() => {
        if (typeof window !== "undefined") {
          setIsMobile(window.innerWidth < 576);
        }
        const handleResize = () => {
          setIsMobile(window.innerWidth < 576);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  return (
    <div className={`p-4 flex justify-center`}>
        <LineChart width={isMobile?430:1000} height={190} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="User" stroke="#8884d8" />
          <Line type="monotone" dataKey="Guest" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default Graph;