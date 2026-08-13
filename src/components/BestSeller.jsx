import { useEcommerceContext } from "../../hooks/useEcommerceContext"
import HeadingText from "../sharedComponents/HeadingText"
import Product from "../sharedComponents/Product";
import { getAllBestSeller as getAllBestSellerApi } from "@/api/productApi";
import { useEffect, useState } from "react";

const BestSeller = () => {
    const {currency} = useEcommerceContext();
    const [bestSeller , setBestSeller] = useState([]);

   useEffect(()=>{
    const getBestSeller = async ()=>{
        const response = await getAllBestSellerApi();
        if(response.data.status === "success"){
            setBestSeller(response.data.data.products);
        };
    };
     
    getBestSeller();
   },[]);
   
   console.log(bestSeller);
        
  return (
    <section aria-labelledby="BestSeller-title"  className="px-4 md:px-8 py-10">
        <HeadingText myClass={"justify-center"} id={"BestSeller-title"} text1={"best"} text2={"seller"}/>
        <p className="mt-3 text-center text-[#868686] font-normal text-base md:text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {bestSeller.map((item , index)=>(
                <Product key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} currency={currency}/>
            ))}
        </div>
    </section>
  )
}

export default BestSeller;