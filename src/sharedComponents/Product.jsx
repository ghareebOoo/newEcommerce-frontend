import { NavLink } from "react-router-dom"

const Product = ({image , name , price , currency , id}) => {
  return (
    <NavLink to={`/product/${id}`} className="cursor-pointer">
      <div className="overflow-hidden">
        <img className="w-full transition-all duration-500 hover:scale-110" src={`${import.meta.env.VITE_IMAGE_BASE_URL}/images/${image}`} alt={`image-${name}`} />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <h3 className="text-[#494949] font-medium text-[14px]">{name}</h3>
        <span className="text-[#494949] font-medium text-base">{currency}{price}</span>
      </div>
    </NavLink>
  )
}

export default Product