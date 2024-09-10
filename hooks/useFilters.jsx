"use client"
//en desuso por el momento

import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {

    const { filters, setFilters } = useContext(FiltersContext)

    const handleChangeCategory = (e) => {

        const value = e.target.value
        console.log(filters.category);

/*         setFilters(prevState=>({
            ...prevState,
            category:value
        })) */

        //
        setFilters(prevState => {
            const { category } = prevState;
            console.log(category);
            return { ...prevState, category: [value] }

            /* if (category.includes(value)) {
                const updatedCategory = category.filter(i => i !== value)
                return { ...prevState, category: ['all'] }
            } else {
                return { ...prevState, category: [value] }
            } */
        })
        /* if (filters.category.includes(value)) {
            let filts = filtersCategory.filter(i => i != e.target.value)//aca HAY UN PROBLEMA
            setFilters(filts)
        } else {
            setFilters(prevState => ({ ...prevState, category: e.target.value }))
        }

 */
    }

    const handleChangeSubcategory = (e) => {

        const value = e.target.value

        setFilters(prevState => {
            const { subcategory } = prevState;
            console.log(subcategory);
            return { ...prevState, subcategory: [value] }
        })
    }

    const handleChangeTalle = (e) => {
        const value = e.target.value


        setFilters(prevState => {
            const { talle } = prevState;
            console.log(talle);
            return { ...prevState, talle: [value] }

        })
    }

    const filterProducts = (products) => {

        return products.filter(product => {
            return (

                (filters.category.includes('all') ||
                    filters.category.includes(product.category)) /* &&

                (filters.subcategory.includes('all') ||
                    filters.subcategory.includes(product.subcategory)) &&

                (filters.talle.includes('all') ||
                    filters.talle.includes(product.talle)) */

            )
        })
    }
    return { filters, setFilters, filterProducts, handleChangeCategory, handleChangeSubcategory, handleChangeTalle }
}
