import react, { useState, useContext, useRef } from "react";
import { collection } from "@/lib/data";
import { SearchContext } from "@/context/search";


export const useSearch = () => {

    const { products, setProducts, search, setSearch } = useContext(SearchContext)

    const ref = useRef()

    /*     const searcher = (e)=>{
            setSearch(e.target.value)
        }
        
    
        const filter=()=>{
            let result = products
            if(!search){
                result = collection
            } result.filter(i=> i.name.toLowerCase().includes(search.name.toLowerCase()))
    
        }
     */
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(ref.current.value)

        setProducts(collection.filter(i => i.name.toLowerCase().includes(search.toLowerCase())))
    }




    return { handleChange, products, handleSubmit, ref };
}
