import HeadingText from "@/sharedComponents/HeadingText"
import { useEcommerceContext } from "../../../hooks/useEcommerceContext"
import { useCartContext } from "../../../hooks/useCartContext"
import { useProductContext } from "../../../hooks/useProductContext"
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import CartTotal from "@/sharedComponents/CartTotal";

const Cart = () => {
    const navigate = useNavigate();
    const {currency} = useEcommerceContext();
    const {cartItems , updateQuantity , deleteProduct , deleteAllProducts} = useCartContext();
    const {ourProducts} = useProductContext();

    const cartData = [];

    for(const productId in cartItems){
        const productInfo = ourProducts.find(product=> product._id === productId);

        if(!productInfo) continue;

        for(const size in cartItems[productId]){
            cartData.push({
                ...productInfo , 
                size,
                quantity: cartItems[productId][size]
            })
        }
    };


  return (
    <section aria-labelledby="Title-cart" className="px-4 md:px-8 pb-10">
        <div className="w-full bg-gray-200 h-px mb-8"></div>
        <HeadingText id="Title-cart" text1={"Your"} text2={"Cart"}/>

        <div className="my-8 flex flex-col gap-4">
            {cartData.map((item , index)=>(
                <article key={index} className="border-y border-[#D1D1D1] py-4 flex items-center justify-between gap-4">
                    <div className="flex items-stretch gap-4">
                        <img className="w-full max-w-15 sm:max-20 md:max-w-28.5" src={`${import.meta.env.VITE_IMAGE_BASE_URL}/images/${item.image[0]}`} alt={`image-${index}-${item.name}`} />
                        <div className="flex flex-col justify-between">
                            <h3 className="text-[12px] sm:text-base md:text-[22px] font-medium text-[#494949]">{item.name}</h3>
                            <div className="flex items-center gap-4">
                                <span className="text-[14px] sm:text-base md:text-[24px] font-light text-[#494949]">{currency}{item.price}</span>
                                <span className="border border-[#DFDFDF] w-7 h-7 sm:h-10 sm:w-10 md:w-12.5 md:h-12.5 text-[14px] sm:text-base md:text-[20px] text-[#1D1D1D] font-medium flex items-center justify-center">{item.size}</span>
                            </div>
                        </div>
                    </div>
                    <input onChange={(e)=> updateQuantity(item._id , item.size , Number(e.target.value))} type="number" className="pl-2 border border-[#DFDFDF] h-7 md:h-12.5 w-full max-w-16 md:max-w-35" value={item.quantity}/>
                    <button onClick={()=> deleteProduct(item._id , item.size)} aria-label="Delete product" className="cursor-pointer">
                        <img className="w-6.25" src={assets.bin_icon} alt="delete-icon"/>
                    </button>
                </article>
            ))}
        </div>

        {cartData.length > 1 && <button onClick={()=> deleteAllProducts()} className="my-8 cursor-pointer block ml-auto h-14.5 w-full bg-[#000000] text-base text-[#FFFFFF] font-medium uppercase">Delete all</button>} 

        <div className="w-full max-w-100 ml-auto mb-8">
            <CartTotal />
        </div>

        <button aria-label="checkout" onClick={() => navigate("/checkout")} className="cursor-pointer block ml-auto h-14.5 w-full max-w-65.5 bg-[#000000] text-base text-[#FFFFFF] font-medium uppercase">Proceed to checkout</button>

    </section>
  )
}

export default Cart