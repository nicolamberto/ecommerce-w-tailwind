import React from 'react'
import { colection } from '@/lib/data'
import Image from 'next/image';

export default function PruebaMapeo() {

    console.log(colection);
    

  return (
    <div>
        {colection.map((i)=>(
            <Image src={i.thumbnails[0]}/>
        ))}
    </div>
  )
}
