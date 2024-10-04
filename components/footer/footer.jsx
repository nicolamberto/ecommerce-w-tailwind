import React from 'react'
import { footer } from '@/lib/data'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <section className='text-gray-400 bg-black py-20 w-full flex flex-col justify-center items-center gap-10'>
      <div className='flex justify-center items-center gap-6 text-3xl'>
        <FaFacebook/>
        <AiFillInstagram/>
      </div>
      <div className='flex flex-wrap flex-row justify-center items-center gap-10 text-xs text-nowrap w-4/6'>
        {footer.map((i) => (
          <p key={i.name}>{i.name}</p>
        ))}
      </div>
      <hr className='w-full'/>
        <div>
          <p>MACOWENS © 2022 / Todos los derechos reservados.</p>
        </div>
    </section>
  )
}
