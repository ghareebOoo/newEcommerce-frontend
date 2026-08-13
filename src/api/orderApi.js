import apiClient from "./apiClient";
import apiEndpoints from "./apiEndpoints";

const placeOrderCod = (data)=>{
    return apiClient.post(apiEndpoints.COD , data);
};

const placeOrderStripe = (data)=>{
    return apiClient.post(apiEndpoints.STRIPE , data);
};

const getAllUserOrders = ()=>{
    return apiClient.get(apiEndpoints.USERORDERS);
};

export {placeOrderStripe , placeOrderCod , getAllUserOrders};