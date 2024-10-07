'use client'

import DesktopHeader from "./desktop-header/desktopheader";
import MobileHeader from "./mobile-header/mobileheader";


export default function Header() {

    return (
        //promocion
        <div className="w-full">
            <div className="bg-blue-700 text-gray-300 text-xs w-full text-center py-2">
                <p>9 CUOTAS SIN INTERÉS EN TODAS TUS COMPRAS |  12 CUOTAS SIN INTERÉS A PARTIR DE $160.000 | ENVÍO GRATIS A TODO EL PAÍS A PARTIR DE $69.999  |  RETIRO EN TIENDA SIN CARGO  </p>
            </div>

            {/*desktop header */}
           <DesktopHeader/>

            {/* mobile header */}
            <MobileHeader/>
            <hr className="w-full" />
        </div>



    )
}
