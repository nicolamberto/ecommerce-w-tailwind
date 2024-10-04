
import React from 'react'

import FirstPartHeader from './first-part-header/firstpartheader'
import CategoriesHeader from './categories-header/categoriesheader'

const DesktopHeader = () => {



    return (
        <div className="py-10 hidden md:flex flex-col justify-between gap-16">
            {/* logo, carrito, botones de promociones e input search */}
            <FirstPartHeader/>

            {/* CATEGORIAS */}
            <CategoriesHeader/>
        </div>
    )
}

export default DesktopHeader
