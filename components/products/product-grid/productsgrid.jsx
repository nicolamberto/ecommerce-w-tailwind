import React, { useState } from 'react'

import ProductItem from '../product-item/productitem';


export default function ProductsGrid({ products }) {



    /*     const prevImg = (product) => {
            const productInCollectionIndex = collection.findIndex(item => item.name === product.name)
            
            const prod = collection.find(i=>i.name === product.name)
            console.log(prod.thumbnails.length);
            
            const isFirstImg = currentIndex === 0 
            const newIndex = isFirstImg ? prod.thumbnails.length-1 : currentIndex-1
            setCurrentIndex(newIndex)
        }
    
        const nextImg =()=>{
            const isLastImg = currentIndex === 3
            const newIndex = isLastImg ? 0: currentIndex+1
            setCurrentIndex(newIndex)
        } */

    return (

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full py-2'>
            {products.map((product) => (
                <ProductItem key={product.name} product={product} />
            ))}
        </div>

    )
}
