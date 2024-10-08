import Link from "next/link";
import CollectionModal from "./collection-modal/collectionmodal";
import NonFuncionalModal from "@/components/non-funcional-component/nonfuncionalmodal";

const CategoriesHeader = () => {
    return (
        <div className="flex relative justify-center items-center flex-row gap-5 font-medium text-sm">
            <div className="text-red-500 hover:underline hover:underline-offset-8 relative group"><p></p>REBAJAS <NonFuncionalModal/></div>
            <div className="hover:underline hover:underline-offset-8 relative group">NUEVOS INGRESOS <NonFuncionalModal/></div>
            <div className="group flex justify-center items-center ">
                <Link href={'/products'} className="hover:underline hover:underline-offset-8 z-40 hover:font-semibold transition">COLECCION</Link>
                {/* MODAL DE COLECCION */}
                <CollectionModal />
            </div>
            <div className="hover:underline hover:underline-offset-8 relative group">CASUAL <NonFuncionalModal/></div>
            <div className="hover:underline hover:underline-offset-8 relative group">SASTRERÍA <NonFuncionalModal/></div>
            <div className="hover:underline hover:underline-offset-8 relative group">ACCESORIOS <NonFuncionalModal/></div>
        </div>
    );
}

export default CategoriesHeader;