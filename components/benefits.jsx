import React from 'react'
import { benefits } from '@/lib/data'


export default function Benefits() {
  return (
    <div className='grid grid-cols-3 gap-20 p-20'>
      {benefits.map((i)=>(
        <div className='flex flex-col justify-center items-center text-xs'>
        
            <div className='text-3xl'>{i.logo}</div>
            <p>{i.title}</p>
            <p className='pt-2 text-gray-500'>{i.subtitle}</p>
            <br className='w-20 h-20'/>
        </div>
      ))}
    </div>
  )
}
