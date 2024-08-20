"use client"

import React from 'react'
import { products } from '@/lib/data'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'


export default function Gabinete() {

    const {addToCart, cart} = useCart()
    console.log(cart);

    return (
        <div>
             {
                products.filter(product=>product.category==='RAM').map((product) => (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={()=>addToCart(product)}>Choose</button>
                    </div>

                ))
            } 
            <div>
                <button> <Link href={'/building/micro'}> Siguiente </Link> </button>
                <button>Atras</button>
            </div>
        </div>
    )
}
