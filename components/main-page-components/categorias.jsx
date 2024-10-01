import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categories } from '@/lib/data'

export default function Categorias() {
    return (
        <div className='grid grid-cols-1 gap-2 w-full sm:w-3/4 sm:grid-cols-2 md:grid-cols-3'>
            {categories.map((i) => (
                <div key={i.name} className='hover:bg-gray-300 hover:brightness-125'>
                    <Link href={'#'}>
                        <Image src={i.img} alt='category image' className='object-fill' />
                    </Link>
                </div>

            ))}

        </div>
    )
}
