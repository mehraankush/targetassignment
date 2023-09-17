import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { value: 55 },
  { value: 14},
  { value: 31 }
];

const COLORS = ["#EE8484","#98D89E", "#F6DC7D"];

export default function PieCharts() {
  return (
    <PieChart width={200} height={150}>
      <Pie
        data={data}    
        labelLine={false}
        outerRadius={70}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
