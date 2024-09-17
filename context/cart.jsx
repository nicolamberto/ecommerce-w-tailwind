"use client"

import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)


    const openCartModal = () => {
        setIsCartModalOpen(true)
    }

    const closeCartModal = () => {
        setIsCartModalOpen(false)
    }

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
        <CartContext.Provider value={{cart, addToCart, removeFromCart, setCart, isCartModalOpen, openCartModal, closeCartModal}}>
            {children}
        </CartContext.Provider>
    )
}