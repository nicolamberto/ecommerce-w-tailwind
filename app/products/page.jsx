"use client"

import React from 'react'
import { products } from '@/lib/data'
import Filters from '@/components/filters'
import Products from '@/components/products'
import { useFilters } from '@/hooks/useFilters'
import CategoryFilters from '@/components/categoryfilters'


export default function page() {


    const { filterProducts } = useFilters()


    return (
        <div className='flex justify-center items-start pt-7 border flex-col border-red-600 w-4/6 '>

            <div className='flex  justify-end border items-center flex-row w-full'>
                <Filters />
            </div>

            <div className=' flex flex-row justify-between w-full border border-black'>
                <CategoryFilters />
                <Products products={filterProducts(products)} />
            </div>

        </div >
    )
}
