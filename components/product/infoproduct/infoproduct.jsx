import react from "react";
import InfoProductLogistic from "../infoproductlogistic/infoproductlogistic";
import { useAlert } from "@/hooks/useAlert";


const InfoProduct = ({product, addToCart}) => {

const {handleAlertAddToCart} = useAlert()
    return (

        <div className='flex flex-col items-start justify-between w-full gap-5 pt-10 md:pt-0'>
            {/* primera parte de texto hasta la linea */}
            <div className='flex gap-5 flex-col'>
                <p className='font-bold text-xl'>{product.name}</p>
                <p className='text-gray-700 text-sm'>{product.description}</p>
                <p className='font-bold text-2xl'>${product.price}</p>
                <p className='text-gray-500'>9 cuotas sin interes de $4444</p>
                <hr className='h-2 w-full' />
            </div>


            {/* talles */}
            <div className='flex flex-col gap-2'>
                <p className='text-xs font-semibold'>Talle:</p>
                <div className='flex flex-row gap-2 pb-3'>
                    {product.talle.map(i => (
                        <div key={i}>
                            <p className='border border-gray-700 px-2 text-base'>{i}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <p className='text-sm text-gray-500'>Tabla de talle</p>
                </div>
            </div>

            {/* boton de agregar al carrito */}
            <div onClick={handleAlertAddToCart}>
                <button className='bg-gray-900 text-gray-200 p-3' onClick={() => addToCart(product)}>AGREGAR AL CARRITO</button>
            </div>

            {/* sliders de informacion */}
            <InfoProductLogistic />


        </div>
    );
}

export default InfoProduct;