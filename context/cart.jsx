"use client"

import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (product)=> {
        setCart(prevState => ([
            ...prevState,
            {
                ...product
            }
        ]))
    }

    const removeFromCart = (product) => {
        setCart(prevState=> prevState.filter (item => item.name !== product.name))
    }


    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}