"use client"
//en desuso por el momento

import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {

    const { filters, setFilters } = useContext(FiltersContext)

    const handleChangeCategory = (e) => {

        const value = e.target.value
        console.log(filters.category);
        

        //
        setFilters(prevState => {
            const { category } = prevState;
            console.log(category);

            if (category.includes(value)) {
                const updatedCategory = category.filter(i => i !== value)
                return { ...prevState, category: ['all'] }
            } else {
                return { ...prevState, category: [value] }
            }
        })
        //
        /* if (filters.category.includes(value)) {
            let filts = filtersCategory.filter(i => i != e.target.value)//aca HAY UN PROBLEMA
            setFilters(filts)
        } else {
            setFilters(prevState => ({ ...prevState, category: e.target.value }))
        }

 */
    }

    const handleChangeMark = (e) => {
        setFilters(prevState => ({ ...prevState, mark: e.target.value }))
    }

    const filterProducts = (products) => {


        return products.filter(product => {
            return (
                (filters.mark === 'all' ||
                    product.mark === filters.mark) &&
                (filters.category.includes('all') ||
                    filters.category.includes(product.category))
            )

        })
    }
    return { filters, setFilters, filterProducts, handleChangeCategory, handleChangeMark }
}
