"use client"
//en desuso por el momento
import Swal from "sweetalert2";


export function useAlert() {

    const handleAlertAddToCart = () => {
        Swal.fire({
            position: "top-end",
            heightAuto: false,
            height: '100px',
            text: "Producto agregado al carrito",
            showConfirmButton: true,
            timer: 1500,
            width: '300px',
            confirmButtonColor: 'black',
            backdrop:false
        });
    }

    const handleAlertRemoveFromCart = () => {
        Swal.fire({
            position: "top-end",
            heightAuto: false,
            height: '130px',
            text: "Producto eliminado del carrito",
            showConfirmButton: true,
            timer: 1500,
            width: '300px',
            confirmButtonColor: 'black'
        });
    }

    return { handleAlertAddToCart, handleAlertRemoveFromCart }
}
