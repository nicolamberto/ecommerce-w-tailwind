"use client"

import { createContext, useState } from "react";

export const FiltersContext = createContext()


export function FiltersProvider({children}) {
     const [filters, setFilters] = useState({
        category:['all'],
        subcategory:['all'],
        talle:['all']
     })

    return (
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
  )
}
