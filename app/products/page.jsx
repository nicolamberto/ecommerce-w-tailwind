"use client"

import React from 'react'
import { collection } from '@/lib/data'
import Filters from '@/components/filters'
import ProductsGrid from '@/components/products/product-grid/productsgrid'
import { useFilters } from '@/hooks/useFilters'

import HeaderCollection from '@/components/headercollection'



export default function page() {



    return (
        <div className='flex justify-center items-center flex-col w-4/6 '>
            <HeaderCollection/>
            <div className=' flex justify-center items-center w-full'>
                <ProductsGrid products={collection} />
            </div>
        </div >
    )
}
