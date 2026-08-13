import { useEffect, useState } from "react";
import { useEcommerceContext } from "../../../hooks/useEcommerceContext";
import { useCartContext } from "../../../hooks/useCartContext";
import { useProductContext } from "../../../hooks/useProductContext";
import { useParams } from "react-router-dom"
import { assets } from "@/assets/assets";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
    const {currency} = useEcommerceContext();
    const {addToCart} = useCartContext();
    const {ourProducts , productItem , fetchProductItem} = useProductContext();
    
    const {id} = useParams();

    const [targetImage , setTargetImage] = useState(0);

    const [size , setSize] = useState('');

    useEffect(()=>{
        fetchProductItem(id)
    },[id , fetchProductItem]);


    const relatedProducts = productItem ? ourProducts.filter(item=> item.category === productItem.category).slice(0 , 5) : [];

    useEffect(()=>{
        setSize("")
    },[id]);

    if(!productItem){
        return <div>Loading...</div>
    };

  return (
    <section aria-labelledby="Title-productDetails" className="px-4 md:px-8 pb-10">
        <div className="w-full bg-gray-200 h-px mb-8"></div>
        <div className="flex flex-col lg:flex-row gap-16">
            {/* LEFT */}
            <div className="w-full flex items-stretch gap-2 lg:max-w-[40%]">
                <div className={`${productItem.image.length > 1 ? "" : "justify-center"} w-full max-w-[30%] flex flex-col gap-2`}>
                    {productItem.image.map((item , index)=>(
                        <img  onClick={()=> setTargetImage(index)} className={`${productItem.image.length > 1 ? "h-full" : ""} w-full cursor-pointer`} src={`${import.meta.env.VITE_IMAGE_BASE_URL}/images/${item}`} alt={`image-${index}${productItem.name}`}/>
                    ))}
                </div>
                <div className="w-full max-w-[70%] flex">
                    <img className="w-full transition-all duration-500" src={`${import.meta.env.VITE_IMAGE_BASE_URL}/images/${productItem.image[targetImage]}`} alt={`image-${productItem.name}`}/>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:max-w-[60%]">
                <h1 className="text-[24px] md:text-[34px] text-[#3D3D3D] font-medium">{productItem.name}</h1>
                <div className="mt-3 mb-5 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img className="w-5.5 h-5.5" src={assets.star_icon} alt="star-icon"/>
                        <img className="w-5.5 h-5.5" src={assets.star_icon} alt="star-icon"/>
                        <img className="w-5.5 h-5.5" src={assets.star_icon} alt="star-icon"/>
                        <img className="w-5.5 h-5.5" src={assets.star_icon} alt="star-icon"/>
                        <img className="w-5.5 h-5.5" src={assets.star_dull_icon} alt="star-iconDull"/>
                    </div>
                    <span className="text-[16px] font-normal text-[#1C1C1C]">(122)</span>
                </div>
                <span className="text-[32px] text-[#2A2A2A] font-medium">{currency}{productItem.price}</span>
                <p className="mt-5 text-[#555555] font-normal text-base">{productItem.description}</p>
                <div className="mt-10 mb-8">
                    <h3 className="text-[20px] text-[#656565] font-semibold">Select Size</h3>
                    <div className="mt-5 flex items-center gap-2">
                        {productItem.sizes.map((si , index)=>(
                            <button onClick={()=> setSize(si)} key={index} className={`cursor-pointer w-16 h-16 border ${size === si ? "border-[#FF8551]" : "border-[#EBEBEB]"} bg-[#FBFBFB] text-base text-[#1D1D1D] font-normal`}>{si}</button>
                        ))}
                    </div>
                </div>
                <button aria-label="addToCart" onClick={()=> addToCart(productItem._id , size)} className="cursor-pointer w-51 h-14.75 bg-[#000000] text-[#FFFFFF] font-semibold">Add to cart</button>
                <hr className="mt-10 w-full max-w-125 h-px bg-[#ADADAD]"/>
                <div className="mt-5 flex flex-col gap-2">
                    <p className="text-[#555555] font-normal text-base">100% Original product.</p>
                    <p className="text-[#555555] font-normal text-base">Cash on delivery is available on this product.</p>
                    <p className="text-[#555555] font-normal text-base">Easy return and exchange policy within 7 days.</p>
                </div>
            </div>
        </div>

        <div className="my-24">
            <div className="flex">
                <div className="border border-[#D0D0D0] h-17.5 w-full md:max-w-42.75 text-[16px] text-[#393939] font-bold flex flex-col justify-center items-center">Description</div>
                <div className="border border-[#D0D0D0] h-17.5 w-full md:max-w-42.75 text-[16px] text-[#898989] font-bold flex flex-col justify-center items-center">Reviews (122)</div>
            </div>
            <div className="px-5 py-20 border border-[#D0D0D0] w-full flex flex-col justify-center items-center gap-2">
                <p className="text-[#555555] text-base font-normal">An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                <p className="text-[#555555] text-base font-normal">E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
        </div>

        <div>
            <RelatedProducts relatedProducts={relatedProducts}/>
        </div>

    </section>
  )
}

export default ProductDetails