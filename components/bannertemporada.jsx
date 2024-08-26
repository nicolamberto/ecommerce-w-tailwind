import React from 'react'
import bannertemporada from '@/public/bannertemporada.webp'
import Image from 'next/image'

export default function BannerTemporada() {
  return (
    <div className='max-w-[1450px]'>
        <Image src={bannertemporada} alt='banner final de temporada'/>
    </div>
  )
}
