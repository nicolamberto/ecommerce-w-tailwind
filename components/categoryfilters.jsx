import React from 'react'
import { useFilters } from '@/hooks/useFilters'


export default function CategoryFilters() {


    const { filters, setFilters, handleChangeCategory, handleChangeMark, filterProducts } = useFilters()

    return (
        <div className='text-sm pr-10 pt-2'>
            <div className='pb-5'>
                <p className=' pb-3 font-semibold'>Componentes de PC</p>
                <div className='font-light flex flex-col gap-5'>
                    <div onClick={handleChangeCategory}>
                        <button className='font-medium pb-1 pl-3 border' value={'all'}>Todos</button>
                    </div>
                    <div>
                        <button onClick={handleChangeCategory} className='font-medium pb-2 pl-3' value={'MB'}>Motherboards</button>
                        <div onClick={handleChangeMark} className='flex flex-col items-start justify-start font-light pl-6'>
                            <button value={'BIOSTAR'}>Biostar</button>
                            <button value={'GIGABYTE'}>Gigabyte</button>
                            <button value={'MSI'}>MSI</button>
                            <button value={'ASROCK'}>Asrock</button>
                            <button value={'ASUS'}>Asus</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleChangeCategory} className='font-medium pb-2 pl-3' value={'MICRO'}>Procesadores</button>
                        <div onClick={handleChangeMark} className='flex flex-col items-start justify-start font-light pl-6'>
                            <button value={'INTEL'}>Intel</button>
                            <button value={'AMD'}>AMD</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleChangeCategory} className='font-medium pb-2 pl-3' value={'RAM'}>Memorias ram</button>
                        <div onClick={handleChangeMark} className='flex flex-col items-start justify-start font-light pl-6'>
                            <button value={'ADATA'}>Adata</button>
                            <button value={'KINGSTON'}>Kingston</button>
                            <button value={'LEXAR'}>Lexar</button>
                            <button value={'PNY'}>PNY</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleChangeCategory} className='font-medium pb-2 pl-3' value={'SSD'}>Discos solidos</button>
                        <div onClick={handleChangeMark} className='flex flex-col items-start justify-start font-light pl-6'>
                            <button value={'ADATA'}>Adata</button>
                            <button value={'CORSAIR'}>Corsair</button>
                            <button value={'PNY'}>PNY</button>
                            <button value={'WESTERN'}>Western</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleChangeCategory} className='font-medium pb-2 pl-3' value={'PV'}>Placas de video</button>
                        <div onClick={handleChangeMark} className='flex flex-col items-start justify-start font-light pl-6'>
                            <button value={'ASUS'}>Asus</button>
                            <button value={'GIGABYTE'}>Gigabyte</button>
                            <button value={'MSI'}>MSI</button>
                            <button value={'PNY'}>PNY</button>
                            <button value={'POWERCOLOR'}>Powercolor</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleChangeCategory} className='font-medium pb-2 pl-3' value={'GAB'}>Gabinetes</button>
                        <div onClick={handleChangeMark} className='flex flex-col items-start justify-start font-light pl-6'>
                            <button value={'ADATA'}>Adata</button>
                            <button value={'COOLERMASTER'}>Coolermaster</button>
                            <button value={'CORSAIR'}>Corsair</button>
                            <button value={'GAMEMAX'}>Gamemax</button>
                            <button value={'GIGABYTE'}>Gigabyte</button>
                            <button value={'THERMALTAKE'}>Thermaltake</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
