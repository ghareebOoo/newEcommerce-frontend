import Product from "@/sharedComponents/Product"
import { useEcommerceContext } from "../../../hooks/useEcommerceContext";

const RelatedProducts = ({relatedProducts}) => {
    const {currency} = useEcommerceContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {relatedProducts.map((item , index)=>(
                <Product key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} currency={currency}/>
        ))}
    </div>
  )
}

export default RelatedProducts