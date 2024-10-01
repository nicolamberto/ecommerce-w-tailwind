import React from 'react'
import bannertemporada from '@/public/bannertemporada.webp'
import Image from 'next/image'

export default function BannerTemporada() {
  return (
    <div>
      <div className='hidden md:block w-4/5'>
        <Image src={bannertemporada} alt='banner final de temporada' />
      </div>

    </div>

  )
}
