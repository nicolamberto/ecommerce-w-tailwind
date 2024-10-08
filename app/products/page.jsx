"use client"

import React, { useState, useContext } from 'react'
import { collection } from '@/lib/data'
import ProductsGrid from '@/components/products/product-grid/productsgrid'
import { useFilters } from '@/hooks/useFilters'

import HeaderCollection from '@/components/main-page-components/headercollection'
import { SearchContext } from '@/context/search'
import { useSearch } from '@/hooks/useSearch'




export default function page() {


    //TODO: LLEVAR A CONTEXT LOS ESTADOS Y LLEVAR LA LOGICA DE CODIGO A UN CUSTOM HOOK AISLADO DE LA SEMANTICA
    const {products} = useSearch()
    



    return (
        <div className='flex justify-center items-center flex-col w-4/6 '>
            <HeaderCollection products={collection} />
            
            <div className=' flex justify-center items-center w-full'>
                <ProductsGrid products={products} />
            </div>
        </div >
    )
}
