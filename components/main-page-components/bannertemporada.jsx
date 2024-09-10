import React from 'react'
import bannertemporada from '@/public/bannertemporada.webp'
import Image from 'next/image'

export default function BannerTemporada() {
  return (
    <div className='xl:w-[1250px] lg:w-[1000px] md:w-[750px] sm:hidden md:block'>
        <Image src={bannertemporada} alt='banner final de temporada'/>
    </div>
  )
}
