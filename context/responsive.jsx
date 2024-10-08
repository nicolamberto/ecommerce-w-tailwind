"use client"

import { createContext, useState } from "react";

export const ResponsiveContext = createContext()

export function ResponsiveProvider({ children }) {


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [collectionOpen, setCollectionOpen]= useState(false)

    const openCollection =()=>{
        setCollectionOpen(!collectionOpen)
    }

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setCollectionOpen(false)
    }


    return (
        <ResponsiveContext.Provider value={{ openMenu, isMenuOpen, closeMenu, setIsMenuOpen, openCollection, collectionOpen }}>
            {children}
        </ResponsiveContext.Provider>
    )
}