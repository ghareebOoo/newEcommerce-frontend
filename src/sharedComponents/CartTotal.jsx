import { useEcommerceContext } from "../../hooks/useEcommerceContext";
import { useCartContext } from "../../hooks/useCartContext";
import HeadingText from "./HeadingText";

const CartTotal = () => {
    const {currency , shipping_Fee} = useEcommerceContext();
    const {cartTotal} = useCartContext();
    
  return (
    <>
        <HeadingText text1={"Cart"} text2={"Total"}/>
        <div className="mt-5 flex flex-col gap-2">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-[#555555] text-[16px] font-medium">Subtotal</span>
                <span className="text-[#555555] text-[16px] font-medium">{currency}{(cartTotal ?? 0).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-[#555555] text-[16px] font-medium">Shipping Fee</span>
                <span className="text-[#555555] text-[16px] font-medium">{currency}{(shipping_Fee ?? 0).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-[#454545] text-[18px] font-bold">Total</span>
                <span className="text-[#454545] text-[18px] font-bold">{currency}{((shipping_Fee ?? 0) + (cartTotal ?? 0)).toFixed(2)}</span>
            </div>
        </div>
        </>
  )
}

export default CartTotal