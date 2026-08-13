import { useCallback, useEffect, useMemo, useState } from "react";
import { ProductContext } from "./createProductContext";
import { getAllProducts, getProduct } from '@/api/productApi';

const ProductContextProvider = ({children}) => {

    const [ourProducts , setOurProducts] = useState([]);
        
    const [productItem , setProductItem] = useState(null);


     useEffect(()=>{
      const fetchProducts = async ()=>{
        try{
          const response = await getAllProducts();
          setOurProducts(response.data.data.products);
        }catch(err){
          console.log(err);
        }
      };

      fetchProducts();
    },[]);

    const fetchProductItem = useCallback(async (id) => {
        try {
            const response = await getProduct(id);
            if (response.data.status === "success") {
                setProductItem(response.data.data.data);
            }
        }catch (err) {
            console.log(err);
        }
    }, []);
    
    const productMap = useMemo(()=>{
        return Object.fromEntries(ourProducts.map(product=> [product._id , product]));
    },[ourProducts]);

  return (
    <ProductContext.Provider value={{fetchProductItem , ourProducts , productMap , productItem}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;