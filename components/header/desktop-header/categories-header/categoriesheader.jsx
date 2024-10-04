import Link from "next/link";
import CollectionModal from "./collection-modal/collectionmodal";

const CategoriesHeader = () => {
    return (
        <div className="flex relative justify-center items-center flex-row gap-5 font-medium text-sm">
            <p className="text-red-500 hover:underline hover:underline-offset-8">REBAJAS</p>
            <p className="hover:underline hover:underline-offset-8 ">NUEVOS INGRESOS</p>
            <div className="group flex justify-center items-center">
                <Link href={'/products'} className="hover:underline hover:underline-offset-8 z-40 hover:font-semibold transition">COLECCION</Link>


                {/* MODAL DE COLECCION */}
                <CollectionModal />

            </div>





            <p className="hover:underline hover:underline-offset-8">CASUAL</p>
            <p className="hover:underline hover:underline-offset-8">SASTRERÍA</p>
            <p className="hover:underline hover:underline-offset-8">ACCESORIOS</p>
        </div>
    );
}

export default CategoriesHeader;