import { useEcommerceContext } from "../../hooks/useEcommerceContext"
import { useProductContext } from "../../hooks/useProductContext";

import HeadingText from "../sharedComponents/HeadingText"
import Product from "../sharedComponents/Product";

const LatestCollections = () => {
    const {currency} = useEcommerceContext();
    const {ourProducts} = useProductContext();
    
    const latestCollections = ourProducts.slice(0 , 10);

  return (
    <section aria-labelledby="LastCollections-title"  className="px-4 md:px-8 py-10">
        <HeadingText myClass={"justify-center"} id={"LastCollections-title"} text1={"latest"} text2={"collections"}/>
        <p className="mt-3 text-center text-[#868686] font-normal text-base md:text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {latestCollections.map((item , index)=>(
                <Product key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} currency={currency}/>
            ))}
        </div>
    </section>
  )
}

export default LatestCollections