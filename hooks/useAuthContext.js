import { AuthContext } from "../context/createAuthContext";
import { useContext } from "react";


export const useAuthContext = ()=>{
    return useContext(AuthContext);
};