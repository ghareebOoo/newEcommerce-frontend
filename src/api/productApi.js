import apiClient from "./apiClient";
import apiEndpoints from "./apiEndpoints";

const getAllProducts = (params)=>{
    return apiClient.get(apiEndpoints.GETPRODUCTS , {params});
};

const getAllBestSeller = ()=>{
    return apiClient.get(apiEndpoints.GETBESTSELLER);
};

const getProduct = (id)=>{
    return apiClient.get(`${apiEndpoints.GETPRODUCT}/${id}`);
};

const addToCart = (itemId , size)=>{
    return apiClient.post(apiEndpoints.ADDTOCART , {itemId , size});
};

const updateCart = (itemId , size , quantity)=>{
    return apiClient.patch(apiEndpoints.UPDATECART , {itemId , size , quantity});
};

const deleteProduct = (itemId , size)=>{
    return apiClient.delete(apiEndpoints.DELETEPRODUCT , {data:{itemId , size}});
};

const deleteAllProducts = ()=>{
    return apiClient.delete(apiEndpoints.DELETEALL);
};

const getUserCart = ()=>{
    return apiClient.get(apiEndpoints.USERCART);
};

export {getAllProducts , getProduct , addToCart , updateCart , deleteProduct , deleteAllProducts , getUserCart , getAllBestSeller};