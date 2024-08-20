"use client"

import React, { useState } from 'react'
import { products } from '@/lib/data'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { useFilters } from '@/hooks/useFilters'


export default function Gabinete() {
const {filters, setFilters, filterProducts} = useFilters()
    console.log(filters);

    const handleChange = (e)=>{

        console.log(filters);
        
    }
    
    return (
        <div className='flex justify-center items-center pt-7'>
            <section className=' grid grid-cols-3 w-3/5'>
            <div>
        <label >Categoría</label>
        <div onClick={(e)=> setFilters(e.target.value)}>
          <button  value='all'>Todas</button>
          <button value='laptops'>Portátiles</button>
          <li value='smartphones'>Celulares</li>
        </div>
      </div>
        </section>
        </div>
        
    )
}
