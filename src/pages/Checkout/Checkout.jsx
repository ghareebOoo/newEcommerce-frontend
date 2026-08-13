import { assets } from "@/assets/assets";
import CartTotal from "@/sharedComponents/CartTotal";
import HeadingText from "@/sharedComponents/HeadingText";
import { useState } from "react";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { placeOrderCod , placeOrderStripe } from "@/api/orderApi";
import { useCartContext } from "../../../hooks/useCartContext.js";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const {cartItems} = useCartContext();

    const navigate = useNavigate();

    const stripeSchema = z.object({
        firstName: z.string().min(3 , 'firstName must be at least 3 characters'),
        lastName: z.string().min(3 , 'lastName must be at least 3 characters'),
        emailAddress: z.string().email('please enter a valid email'),
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zipCode: z.string(),
        country: z.string(),
        phone: z.string(),
    });

    const form = useForm({resolver: zodResolver(stripeSchema) });

    const {register , handleSubmit , formState:{errors} , isSubmitting} = form;

    const [method , setMethod] = useState('cash');

    const items = [];

    Object.keys(cartItems).forEach((id)=>{
        Object.keys(cartItems[id]).forEach((size)=>{
            if(cartItems[id][size] > 0){
                items.push({
                    product:id,
                    size,
                    quantity:cartItems[id][size]
                });
            }

        });
    });

    const onSubmit = async(data)=>{
        try{
            const address = {
                firstName:data.firstName,
                lastName:data.lastName,
                emailAddress:data.emailAddress,
                street:data.street,
                city:data.city,
                state:data.state,
                zipCode:data.zipCode,
                country:data.country,
                phone:data.phone
            };
            if(method === "cash"){
                const response = await placeOrderCod({items, address});
                if(response.data.status === "success"){
                    navigate('/orders');
                };
            }else if(method === "stripe"){
                const response = await placeOrderStripe({items, address});
                if(response.data.status === "success"){
                    window.location.assign(response.data.session_url);
                };
            }
        }catch(err){
            console.log(err);
        }
    };
  return (
    <section aria-labelledby="Title-checkout" className="px-4 md:px-8 pb-10">
        <div className="w-full bg-gray-200 h-px mb-8"></div>
        <HeadingText id={"Title-checkout"} text1={"Delivery"} text2={"Information"}/>
        <div className="mt-8 flex flex-col lg:flex-row gap-16">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-full">
                        <input {...register('firstName')} type="text" name="firstName" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="First name"/>
                        <p className="text-red-500 text-base font-medium">{errors.firstName?.message}</p>
                    </div>
                    <div className="w-full">
                       <input {...register('lastName')} type="text" name="lastName" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="Last name"/>
                        <p className="text-red-500 text-base font-medium">{errors.lastName?.message}</p>
                    </div>
                </div>
                <div className="w-full">
                    <input {...register('emailAddress')} type="email" name="emailAddress" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="Email address"/>
                    <p className="text-red-500 text-base font-medium">{errors.emailAddress?.message}</p>
                </div>
                <div className="w-full">
                    <input {...register('street')} type="text" name="street" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="Street"/>
                    <p className="text-red-500 text-base font-medium">{errors.street?.message}</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-full">
                        <input {...register('city')} type="text" name="city" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="City"/>
                        <p className="text-red-500 text-base font-medium">{errors.city?.message}</p>
                    </div>
                    <div className="w-full">
                        <input {...register('state')} type="text" name="state" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="State"/>
                        <p className="text-red-500 text-base font-medium">{errors.state?.message}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-full">
                        <input {...register('zipCode')} type="text" name="zipCode" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="Zip code"/>
                        <p className="text-red-500 text-base font-medium">{errors.zipCode?.message}</p>
                   </div>
                   <div className="w-full">
                        <input {...register('country')} type="text" name="country" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="Country"/>
                        <p className="text-red-500 text-base font-medium">{errors.country?.message}</p>
                    </div>
                </div>
                <div className="w-full">
                    <input {...register('phone')} type="text" name="phone" className="w-full h-12.5 border border-[#C5C5C5] outline-none pl-2" required placeholder="Phone"/>
                    <p className="text-red-500 text-base font-medium">{errors.phone?.message}</p>
                </div>
                <button type="submit" aria-label="place order" className="cursor-pointer block ml-auto h-14.5 w-full max-w-65.5 bg-[#000000] text-base text-[#FFFFFF] font-medium uppercase">{isSubmitting ? "Loading..." : "Place Order" }</button>
            </form>
            <div className="w-full">
                <CartTotal />
                <div className="mt-8">
                    <HeadingText text1={'Payment'} text2={'Method'}/>
                    <div className="my-5 flex flex-col md:flex-row items-center gap-4">
                        <button onClick={()=> setMethod("stripe")} aria-label="Stripe" className="cursor-pointer w-full h-13 pl-2 border border-[#B3B3B3] flex items-center justify-start gap-2">
                            <span className={`${method === "stripe" ? "bg-green-500 border-green-500" : ""} w-4.5 h-4.5 border border-[#9F9F9F] rounded-full`}></span>
                            <img className="w-16" src={assets.stripe_logo} alt="Stripe-logo"/>
                        </button>
                        <button onClick={()=> setMethod("cash")} aria-label="Cash" className="cursor-pointer w-full h-13 pl-2 border border-[#B3B3B3] flex items-center justify-start gap-2">
                            <span className={`${method === "cash" ? "bg-green-500 border-green-500" : ""} w-4.5 h-4.5 border border-[#9F9F9F] rounded-full`}></span>
                            <p className="text-[12px] text-[#A6A6A6] font-normal uppercase">Cash on delivery</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout