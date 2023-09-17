import { ChevronDown, Dot } from "lucide-react";
import Graph from "./Chart";

const ChartDisplay = () =>{

    return (
            <div className="flex flex-col bg-white  mt-10 rounded-xl w-full mx-[70px]">
            
                <div className="flex justify-between p-5">
                
                    <div className="flex flex-col">
                        <h2 className=" text-black text-xl font-bold">Activities</h2>
                        <div className="flex">
                            <p className="text-gray-500 text-sm">May-June 2021</p>
                            <ChevronDown fill="text-gray-500"/>
                        </div>
                    </div>
                
                    <div className="flex gap-2 text-black mt-4">
                        <div className="flex">
                            <Dot fill="#EAEAEA"/>
                            <p className="font-semibold text-sm" >Guest</p>
                        </div>
                        <div className="flex">
                            <Dot fill="#9BDD7C"/>
                            <p className="font-semibold text-sm">User</p>
                        </div>
                    </div>
                
              </div>
            
                <div>
                    <Graph/>
                </div>
            
            </div>
    )
   
}

export default ChartDisplay;
