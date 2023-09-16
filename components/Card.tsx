import {Hand} from 'lucide-react'

interface User {
    title: string;
    value: number;
  }

export function Card ({title,value}:User){
  
    return(
        <div className="text-black bg-red-600 w-[220px] p-4 rounded-xl">
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