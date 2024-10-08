import { motion } from "framer-motion";
import Link from "next/link";

const CollectionModal = () => {
    return (
        <motion.div className="hidden group-hover:flex group-hover:justify-center group-hover:items-center w-full bg-white ">
            <div className="absolute top-5 flex justify-center items-center bg-white gap-4 w-full z-10">
                <div className="grid grid-cols-5 w-4/6 gap-10 py-14">
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/abrigos'} className="text-base font-semibold">ABRIGOS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/abrigos/subcategory/camperas'}>Camperas</Link>
                            <Link href={'/products/category/abrigos/subcategory/sobresacos'}>Sobresacos</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/jeans'} className="text-base font-semibold">JEANS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/jeans/subcategory/regular'}>Regular</Link>
                            <Link href={'/products/category/jeans/subcategory/slim'}>Fit</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/sacos'} className="text-base font-semibold">SACOS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/sacos/subcategory/sacos'}>Sacos</Link>
                            <Link href={'/products/category/sacos/subcategory/trajes'}>Trajes</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/remeras'} className="text-base font-semibold">REMERAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/remeras/subcategory/mangacorta'}>Manga Corta</Link>
                            <Link href={'/products/category/remeras/subcategory/mangalarga'}>Manga Larga</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/buzos'} className="text-base font-semibold">SWEATERS Y BUZOS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/buzos/subcategory/sweaters'}>Sweaters</Link>
                            <Link href={'/products/category/buzos/subcategory/buzos'}>Buzos</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/chombas'} className="text-base font-semibold">CHOMBAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/chombas/subcategory/mangacorta'}>Manga Corta</Link>
                            <Link href={'/products/category/chombas/subcategory/mangalarga'}>Manga Larga</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/camisas'} className="text-base font-semibold">CAMISAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/camisas/subcategory/sport'}>Sport</Link>
                            <Link href={'/products/category/camisas/subcategory/vestir'}>Vestir</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/bermudas'} className="text-base font-semibold">BERMUDAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/bermudas/subcategory/bermudas'}>Bermudas</Link>
                            <Link href={'/products/category/bermudas/subcategory/shortsdebano'}>Shorts de Baño</Link>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/pantalones'} className="text-base font-semibold">PANTALONES</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <Link href={'/products/category/pantalones/subcategory/cargo'}>Cargo</Link>
                            <Link href={'/products/category/pantalones/subcategory/vestir'}>Vestir</Link>
                        </ul>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default CollectionModal;