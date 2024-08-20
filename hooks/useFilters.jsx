"use client"
//en desuso por el momento

import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {

    const { filters, setFilters } = useContext(FiltersContext)

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({...prevState, category: e.target.value }))
    }

    const handleChangeMark = (e) => {
        setFilters(prevState => ({...prevState, mark: e.target.value }))
    }

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                (filters.mark === 'all' ||
                product.mark === filters.mark) &&
                (filters.category === 'all' ||
                product.category === filters.category)

            )

        })
    }
    return { filters, setFilters, filterProducts, handleChangeCategory, handleChangeMark }
}
