import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#EE8484","#98D89E", "#F6DC7D"];

export default function PieCharts(values:number[]) {
  const data = values.values;
  const convertedData = data.map((value:number) => ({ value }));

  return (
    <PieChart width={200} height={150}>
      <Pie
        data={convertedData}    
        labelLine={false}
        outerRadius={70}
        dataKey="value"
      >
        {data.map((entry:any, index:number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
