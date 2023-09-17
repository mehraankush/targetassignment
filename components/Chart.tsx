import React from "react";
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from "recharts";

const Graph = () => {
    const data = [
        {
          "name": "Week0",
          "User": 100,
          "Guest": 200,
        //   "amt": 2400
        },
        {
          "name": "Week1",
          "User": 400,
          "Guest": 400,
        //   "amt": 2210
        },
        {
          "name": "Week2",
          "User": 200,
          "Guest": 200,
        //   "amt": 2290
        },
        {
          "name": "Week03",
          "User": 500,
          "Guest": 500,
        //   "amt": 2000
        },
        {
          "name": "Week4",
          "User": 250,
          "Guest": 700,
        //   "amt": 2181
        },
        {
          "name": "Week5",
          "User": 367,
          "Guest": 267,
        //   "amt": 2500
        }
      ]

  return (
    <div className="p-4">
        <LineChart width={1000} height={190} data={data}
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