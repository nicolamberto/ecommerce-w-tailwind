import { motion } from "framer-motion";
import Link from "next/link";

const CollectionModal = () => {
    return (
        <motion.div className="hidden group-hover:flex group-hover:justify-center group-hover:items-center w-full bg-white">
            <div className="absolute top-5 flex justify-center items-center bg-white gap-4 w-full z-10">
                <div className="grid grid-cols-5 w-4/6 gap-10 py-14">
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/abrigos'} className="text-base font-semibold">ABRIGOS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Camperas</li>
                            <li>Sobresacos</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/jeans'} className="text-base font-semibold">JEANS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Regular</li>
                            <li>Fit</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/sacos'} className="text-base font-semibold">SACOS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Sacos</li>
                            <li>Trajes</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/remeras'} className="text-base font-semibold">REMERAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Manga Corta</li>
                            <li>Manga Larga</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/buzos'} className="text-base font-semibold">SWEATERS Y BUZOS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Sweaters</li>
                            <li>Buzos</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/chombas'} className="text-base font-semibold">CHOMBAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Manga Corta</li>
                            <li>Manga Larga</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/camisas'} className="text-base font-semibold">CAMISAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Sport</li>
                            <li>Vestir</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/bermudas'} className="text-base font-semibold">BERMUDAS</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Bermudas</li>
                            <li>Shorts de Baño</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-3">
                        <Link href={'/products/category/pantalones'} className="text-base font-semibold">PANTALONES</Link>
                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                            <li>Cargo</li>
                            <li>Vestir</li>
                        </ul>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default CollectionModal;