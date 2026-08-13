import { toast } from "react-toastify";
import {CartContext} from "./createCartContext";
import { addToCart as addToCartApi , updateCart as updateCartApi , deleteProduct as deleteProductApi , deleteAllProducts as deleteAllProductsApi } from '@/api/productApi';
import { useProductContext } from "../hooks/useProductContext";
import { useEffect, useMemo, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { getUserCart as getUserCartApi} from "@/api/productApi";

const CartContextProvider = ({children}) => {
    const { productMap } = useProductContext();
    const { user } = useAuthContext();

    const [cartItems , setCartItems] = useState({});

        const addToCart = async (itemId , size)=>{
          try{
            if(!size){
              return toast.error('Select product size');
            };
    
            const response = await addToCartApi(itemId , size);
    
            if (response.data.status === "success") {
              toast.success(response.data.message);
              setCartItems(response.data.cartData);
            };
    
          }catch(err){
            console.log(err);
          }
        };
    
      
        const cartCount = useMemo(()=>{
          let total = 0;
          for(const itemId in cartItems){
            for(const size in cartItems[itemId]){
            total += cartItems[itemId][size];
          };
        };
          return total;
        },[cartItems]);
    
        // const cartTotal = useMemo(()=>{
        //   let total = 0;
    
        //   for(const itemId in cartItems){
        //     const productInfo = ourProducts.find(product=> product._id === itemId);
            
        //     if(!productInfo) continue;
    
        //     for(const size in cartItems[itemId]){
        //     total += cartItems[itemId][size] * productInfo.price;
        //   };
        // };
        //   return total;
        // },[cartItems , ourProducts]);
        
        const cartTotal = useMemo(()=>{
          let total = 0;
    
          for(const itemId in cartItems){
            const productInfo = productMap[itemId];
    
            if(!productInfo) continue;
    
            for(const size in cartItems[itemId]){
              total += cartItems[itemId][size] * productInfo.price;
            };
          };
    
          return total;
        },[productMap , cartItems]);
    
    
        const updateQuantity = async (itemId , size , quantity)=>{
          try{
            const response = await updateCartApi(itemId , size , quantity);
            if(response.data.status === "success"){
              if(quantity <= 0){
                toast.success("Product deleted successfully");
                setCartItems(response.data.cartData);
                return;
              }
              toast.success(response.data.message);
              setCartItems(response.data.cartData);
            }
          }catch(err){
            console.log(err);
          };
        };
    
        
        const deleteProduct = async (itemId , size)=>{
          try{
            const response = await deleteProductApi(itemId , size);
            if(response.data.status === "success"){
              const clonedCart = {...cartItems};
              if(clonedCart[itemId] && clonedCart[itemId][size]){
                delete clonedCart[itemId][size];
              };
              if(Object.keys(clonedCart[itemId]).length === 0){
                delete clonedCart[itemId][size];
              };
              setCartItems(clonedCart);
              toast.success(response.data.message);
            };
          }catch(err){
            console.log(err);
          }
        };
    
        const deleteAllProducts = async()=>{
          const response = await deleteAllProductsApi();
          if(response.data.status === "success"){
            setCartItems({});
            toast.success(response.data.message);
          };
        };

           useEffect(()=>{

        if(user){

        const getUserCart = async ()=>{
            try{
                const response = await getUserCartApi();
                if(response.data.status === "success"){
                    setCartItems(response.data.cartData);
                }
            }catch(err){
                console.log(err);
            }
    };

    getUserCart();

  }else{
    setCartItems({});
  }

},[user , setCartItems]);

  return (
    <CartContext.Provider value={{cartItems , setCartItems , addToCart , cartCount , cartTotal , updateQuantity , deleteProduct , deleteAllProducts}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;