'use client'

import { collection } from "@/lib/data"
import { createContext, useState } from "react"

export const SearchContext = createContext()

export function SearchProvider({children}){

    const [products, setProducts]= useState(collection)
    const [search, setSearch] = useState('')



    return (
        <SearchContext.Provider value={{products, setProducts, search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}