"use client"

import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)



    const prices = cart.map(i =>(i.price*i.quantity) )

    const totalPrice = prices.reduce((total, price) => total + price, 0)

    const openCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen)
    }

    const closeCartModal = () => {
        setIsCartModalOpen(false)
    }

    const addToCart = (product) => {
        const prodInCartIndex = cart.findIndex(i => i.name === product.name)
        if (prodInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[prodInCartIndex].quantity += 1
            return setCart(newCart)
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeOneItem = (product) => {
        const prodInCartIndex = cart.findIndex(i=> i.name === product.name)
        if(product.quantity === 1){
            return setCart(prevState => prevState.filter(i=>i.name !== product.name))
        } 
        const newCart = structuredClone(cart)
        newCart[prodInCartIndex].quantity -= 1
        return setCart(newCart)
        
        
        
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.name !== product.name))
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart, isCartModalOpen, openCartModal, closeCartModal, totalPrice, removeOneItem }}>
            {children}
        </CartContext.Provider>
    )
}