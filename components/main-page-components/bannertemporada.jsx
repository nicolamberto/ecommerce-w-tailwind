import React from 'react'
import bannertemporada from '@/public/bannertemporada.webp'
import Image from 'next/image'

export default function BannerTemporada() {
  return (
    <div>
      <div className='hidden md:flex justify-center w-full items-center'>
        <Image src={bannertemporada} alt='banner final de temporada' />
      </div>

    </div>

  )
}
