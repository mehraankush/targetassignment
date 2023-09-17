import {Hand} from 'lucide-react'

interface User {
    title: string;
    value: number;
    Stylesbg:string;
  }

export function Card ({title,value,Stylesbg}:User){
  //  console.log(Stylesbg)
   
    return(
        <div className={`text-black bg-[#fff] flex flex-col mt-3 md:mt-0 flex-wrap md:w-[220px] p-4 rounded-xl`}>
            <div className='flex justify-end'>
              <Hand/>
            </div>
            <div>
              <p className='text-xs'>{title}</p>
              <p className='font-bold'>{value}</p>
            </div>
        </div>
    )
}