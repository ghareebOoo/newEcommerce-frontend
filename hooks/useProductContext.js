import { useContext } from "react";
import { ProductContext } from "../context/createProductContext";


export const useProductContext = ()=>{
    return useContext(ProductContext)
};