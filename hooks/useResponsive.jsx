"use client"

import { useContext } from "react";
import { ResponsiveContext } from "@/context/responsive";

export const useResponsive = () => {
    const context = useContext(ResponsiveContext)

    if(context === undefined){
        throw new Error('context within a provider')
    }
    return context
}