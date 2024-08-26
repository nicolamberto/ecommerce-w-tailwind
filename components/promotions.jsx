import React from 'react'
import bannerpromoabrigos from '@/public/bannerpromoabrigos.webp'
import bannerpromo2prendas from '@/public/bannerpromo2prendas.webp'
import Image from 'next/image'
import { promoabrigos, promo2prendas } from '@/lib/data'

export default function Promotions() {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-10 py-24'>

            <div className='flex flex-row justify-center items-start gap-5'>
                <div className='h-[10rem]'>
                    <Image src={bannerpromoabrigos} width={200} height={200} />
                </div>

                <div className='flex flex-row justify-center items-center gap-2'>
                    {promoabrigos.map((i) => (
                        <div className='flex flex-col justify-center items-center gap-3 relative'>
                            {/* imagen */}
                            <div className=''>
                                <Image src={i.img} width={220} />
                            </div>
                            {/* info */}
                            <div className='flex flex-col justify-center items-center text-xs'>
                                <p className='pb-1'>{i.name}</p>
                                <div className='flex flex-row justify-around items-center text-xs gap-4 w-full'>
                                    <p className='line-through text-base'>${i.oldprice}</p>
                                    <p className='font-extrabold text-blue-800 text-base'>${i.newprice}</p>
                                    <div className='bg-blue-800 py-[1px] px-[3px] rounded-sm text-white text-xs font-semibold'>
                                        <p>{i.off} OFF</p>
                                    </div>
                                </div>
                                <p className='font-semibold'>9 cuotas sin iteres de ${i.ninequot}</p>
                            </div>
                            <div className='bg-red-700 text-white rounded-full p-7 font-semibold absolute top-2 right-2 text-SM'>
                                <p className='absolute top-[30%] left-[30%] '>{i.off}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-row justify-center items-start gap-5'>
                <div className='h-[10rem]'>
                    <Image src={bannerpromo2prendas} width={200} height={200} />
                </div>

                <div className='flex flex-row justify-center items-center gap-2'>
                    {promo2prendas.map((i) => (
                        <div className='flex flex-col justify-center items-center gap-3 relative'>
                            {/* imagen */}
                            <div className=''>
                                <Image src={i.img} width={220} />
                            </div>
                            {/* info */}
                            <div className='flex flex-col justify-center items-center text-xs'>
                                <p className='pb-1'>{i.name}</p>
                                <div className='flex flex-row justify-around items-center text-xs gap-4 w-full'>

                                    <p className='font-extrabold text-base'>${i.price}</p>

                                </div>
                                <p className='font-semibold'>9 cuotas sin iteres de ${i.ninequot}</p>
                            </div>
                            <div className='bg-red-700 text-white rounded-full p-7 font-semibold absolute top-2 right-2 text-xs'>
                                <p className='absolute inset-0 top-3 text-center'>{i.promo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
