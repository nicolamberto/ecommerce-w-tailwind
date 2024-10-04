

import { useCart } from "@/hooks/useCart";
import react from "react";



const ResumeCart = () => {

    const { totalPrice } = useCart()
    return (
        <div>
            <div className='bg-gray-300 flex flex-col gap-5 w-[300px] sm:w-[400px] p-10 shadow-lg rounded-sm'>
                <p className='text-xl text-center sm:text-2xl'>Resumen de compra</p>
                <hr />
                <div className=" flex flex-row justify-between text-base sm:text-xl">
                    <p>Total</p>
                    <p className='font-bold'>${totalPrice}</p>
                </div>

                <div>
                    <button className='text-center bg-black text-gray-300 py-2 w-full'>INICIAR COMPRA</button>
                </div>
            </div>
        </div>
    );
}

export default ResumeCart;