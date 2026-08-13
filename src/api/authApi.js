import apiClient from "./apiClient";
import apiEndpoints from "./apiEndpoints";

export const signup = (userData)=>{
    return apiClient.post(apiEndpoints.REGISTER , userData);
};

export const login = (userData)=>{
    return apiClient.post(apiEndpoints.LOGIN , userData);
};

export const forgotPassword = (userData)=>{
    return apiClient.post(apiEndpoints.FORGOTPASSWORD , userData);
};

export const resetPassword = (token , userData)=>{
    return apiClient.patch(`${apiEndpoints.RESETPASSWORD}/${token}` , userData);
};

export const updatePassword = (userData)=>{
    return apiClient.patch(apiEndpoints.UPDATEPASSWORD , userData);
};

export const logout = ()=>{
    return apiClient.post(apiEndpoints.LOGOUT);
};

export const getMe = async ()=>{
    const response = await apiClient.get(apiEndpoints.GETME);
    return response.data;
};