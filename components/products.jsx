import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Products({products}) {


  return (
    <div>
      <div className=' grid grid-cols-3 gap-5 border border-blue-800'>
                    {products.map((product) => (
                        <div key={product.name} className=' border rounded-xl w-[15rem] border-black/2 flex justify-center items-center flex-col mb-5'>
                            <div className=' bg-gray-100 w-full -z-10'>
                                <Image
                                    className='p-8'
                                    src={product.img}
                                    alt='Product Images'
                                    width={200}
                                    height={200}
                                    quality={95} />
                            </div>

                            <p className=' text-center text-xs font-extralight pt-1'>{product.name}</p>
                            <div className='flex justify-around items-center flex-row w-full'>
                                <p className='font-semibold text-sm'>${product.price}</p>
                                <button className='m-1 p-1 border border-blue rounded-xl text-sm text-center' onClick={() => addToCart(product)}>Choose</button>
                            </div>

                        </div>

                    ))}
                    <div>
                        <button> <Link href={'/building/motherboard'}> Siguiente </Link> </button>
                        <button>Atras</button>
                    </div>
                </div>
    </div>
  )
}
