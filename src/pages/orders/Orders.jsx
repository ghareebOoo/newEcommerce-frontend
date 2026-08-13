import HeadingText from "@/sharedComponents/HeadingText";
import { useEffect, useState } from "react";
import {getAllUserOrders as getAllUserOrdersApi} from "../../api/orderApi.js";

const Orders = () => {
  const [orders , setOrders] = useState([]);

  useEffect(()=>{
    const getAllUserOrders = async ()=>{
      try{
        const response = await getAllUserOrdersApi();
        if(response.data.status === "success"){
          setOrders(response.data.orders);
          console.log(response);
        };
      }catch(err){
        console.log(err);
      }
    };

    getAllUserOrders();
  },[]);

  console.log(orders);
  return (
    <section aria-labelledby="Title-placeOrder" className="px-4 md:px-8 py-10">
        <HeadingText id={"Title-placeOrder"} text1={"my"} text2={"orders"} />
        <div className="my-8 flex flex-col gap-4">
          {orders.map((item , index)=>(
            <article key={index} className="flex flex-col gap-4">
              {item.items.map((pro , i)=>(
                <div key={i} className="border-y border-[#D1D1D1] py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="w-full flex items-stretch gap-4">
              <img className="w-full max-w-20 md:max-w-28.5" src={`${import.meta.env.VITE_IMAGE_BASE_URL}/images/${pro.image}`} alt={`${pro.name}-image`} />
                <div className="flex flex-col justify-between">
                  <h3 className="line-clamp-1 text-base md:text-[22px] font-medium text-[#494949]">{pro.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] md:text-[24px] font-light text-[#494949]">${pro.price}</span>
                      <span className="text-[14px] md:text-[24px] font-light text-[#494949]">Quantity: {pro.quantity}</span>
                      <span className="text-[14px] md:text-[24px] font-light text-[#494949]">size: {pro.size}</span>
                    </div>
                    <span className="text-[12px] md:text-[18px] text-[#3C3C3C] font-normal">Date:<span className="text-[#989898]">{" "} {new Date(item.createdAt).toLocaleDateString('EN-US' , {weekday:"short" , day: "2-digit" , month: "short" , year:"numeric"})}</span></span>
                    <span className="text-[12px] md:text-[18px] text-[#3C3C3C] font-normal">Payment:<span className="text-[#989898]">{" "}{item.paymentMethod}</span></span>
                </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#00A625]"></span>
              <p className="whitespace-nowrap text-[#454545] font-normal text-base md:text-[20px]">{item.status}</p>
            </div>
              </div>))}
          </article>
          ))}
        </div>
    </section>
  )
}

export default Orders