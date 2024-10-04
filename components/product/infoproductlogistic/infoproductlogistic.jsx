'use client'

import React, { useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa6";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const InfoProductLogistic = () => {
    const [MP, SetMP] = useState(false)
    const [ME, SetME] = useState(false)
    const [PC, SetPC] = useState(false)




    return (
        <div className='flex gap-5 flex-col pt-10 w-full'>

            <div className='flex gap-3 flex-col'>
                <div className="flex flex-row justify-between items-center cursor-pointer" onClick={()=>SetMP(!MP)}>
                    <div className='flex justify-start items-center flex-row gap-3'>
                        <div className='text-2xl'> <BsFillCreditCard2BackFill /></div>
                        <p>Métodos de pago</p>

                    </div>
                    <RiArrowDropDownLine size={25} />
                </div>
                {/* dropdown hidden */}
                {MP &&
                    <div className="block">
                        <p className="text-sm text-gray-600">
                            Aceptamos pagos en una o más cuotas con todas las tarjetas de crédito y todos los bancos. Importante: Las promociones bancarias no son aplicables a compras a través de Mercado Pago así como a Cuota Simple. A la hora de realizar un pago, se encriptan de forma segura todos los datos.Para una mayor seguridad, no guardamos los datos de las tarjetas.
                        </p>
                    </div>
                }

                <hr className='h-2 w-full' />
            </div>


            <div className='flex gap-3 flex-col'>
                <div className="flex flex-row justify-between items-center cursor-pointer" onClick={()=> SetME(!ME)}>
                    <div className='flex justify-start items-center flex-row gap-3'>
                        <div className='text-2xl'> <FaTruck /></div>
                        <p>Métodos de envío</p>

                    </div>
                    <RiArrowDropDownLine size={25} />
                </div>
                {/* dropdown hidden */}
                {ME &&
                    <div className="block">
                        <p className="text-sm text-gray-600">
                            Realizamos envíos a todo el país. Trabajamos con TREGGO, ANDREANI  y OCA como transportes logísticos para dichos envíos. Además contamos con modalidad de retiro en tiendas de la marca y sucursales ANDREANI y OCA.
                        </p>
                    </div>
                }

                <hr className='h-2 w-full' />
            </div>


            <div className='flex gap-3 flex-col'>
                <div className="flex flex-row justify-between items-center cursor-pointer" onClick={()=> SetPC(!PC)}>
                    <div className='flex justify-start items-center flex-row gap-3'>
                        <div className='text-2xl'> <MdPublishedWithChanges /></div>
                        <p>Politicas de cambios</p>

                    </div>
                    <RiArrowDropDownLine size={25} />
                </div>
                {/* dropdown hidden */}
                {PC &&
                    <div className="block">
                        <p className="text-sm text-gray-600">
                            Para realizar un cambio de producto, la prenda debe estar en el mismo estado en el que fueron recibidas, sin uso y con el embalaje y etiquetas originales. Estas condiciones no aplican para cambios de ropa interior ya que las mismas no tienen cambio. El plazo para solicitarlo es de hasta 30 días corridos desde recibida la prenda.
                        </p>
                    </div>
                }

                <hr className='h-2 w-full' />
            </div>


        </div>)
}

export default InfoProductLogistic