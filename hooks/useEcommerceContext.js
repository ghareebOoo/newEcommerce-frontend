import { useContext } from "react";
import { EcommerceContext } from "../context/createEcommerceContext";


export const useEcommerceContext = ()=>{
    return useContext(EcommerceContext)
};