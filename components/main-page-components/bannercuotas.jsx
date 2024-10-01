import Image from 'next/image'
import React from 'react'
import bannercuotas from '@/public/bannercuotas.webp'


export default function BannerCuotas() {
  return (
    <div className='p-14 hidden md:block'>
      <Image src={bannercuotas} alt='banner cuotas'/>
    </div>
  )
}
