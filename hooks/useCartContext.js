import { CartContext } from "../context/createCartContext";
import { useContext } from "react";


export const useCartContext = ()=>{
    return useContext(CartContext);
};