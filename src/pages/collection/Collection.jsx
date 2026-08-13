import { useEffect, useState } from "react";
import { useEcommerceContext } from "../../../hooks/useEcommerceContext";
import HeadingText from "../../sharedComponents/HeadingText";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Product from "@/sharedComponents/Product";
import { getAllProducts } from "@/api/productApi";
import { assets } from "@/assets/assets";

const Collection = () => {

  const {currency , showInputSearch , setShowInputSearch} = useEcommerceContext();

  const [sortType , setSortType] = useState('Relavent');
  const [categories , setCategories] = useState([]);
  const [subCategories , setSubCategories] = useState([]);
  const [search , setSearch] = useState("");
  const [page , setPage] = useState(1);
  const [products , setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const handleCategories = (e)=>{
    if(categories.includes(e.target.value)){
      setCategories(prev=> prev.filter(item=> item !==  e.target.value));
    }else{
      setCategories(prev=> [...prev , e.target.value]);
    }
  };

  const handleSubCategories = (e)=>{
    if(subCategories.includes(e.target.value)){
      setSubCategories(prev=> prev.filter(item=> item !==  e.target.value));
    }else{
      setSubCategories(prev=> [...prev , e.target.value]);
    }
  };

  const toggleChangeSort = (value)=>{
    setSortType(value);
  };

  // const filteredProducts = useMemo(()=>{
  //   let result = ourProducts.filter((item)=>{
  //     const searchMatch =  search=== "" || item.name.toLowerCase().includes(search.toLowerCase());
  //     const categoryhMatch = categories.length === 0 || categories.includes(item.category);
  //     const subCategoryMatch = subCategories.length === 0 || subCategories.includes(item.subCategory);

  //     return searchMatch && categoryhMatch && subCategoryMatch
  //   });

  //   switch(sortType){
  //     case 'Low to High':
  //       return [...result].sort((a,b)=> a.price - b.price);

  //     case 'High to Low':
  //       return [...result].sort((a,b)=> b.price - a.price);

  //     default: 
  //       return result;
  //   }
  // },[categories , ourProducts ,search , sortType , subCategories]);

  // const perPage = 12;
  // const totalPage = Math.ceil(filteredProducts.length / perPage);
  // const paginatedProducts = filteredProducts.slice((page - 1) * perPage , (page * perPage));

  let sort = "";

  switch (sortType) {
    case "Low to High":
      sort = "price";
      break;

    case "High to Low":
      sort = "-price";
      break;

    default:
      sort = "-createdAt";
  };

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await getAllProducts({
        page,
        search,
        sort,
        category: categories.join(","),
        subCategory: subCategories.join(","),
      });

      setProducts(response.data.data.products);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.log(err);
    }
  };

  fetchProducts();
}, [categories, page, search, sort, subCategories]);

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    })
  },[page]);

  useEffect(() => {
  setPage(1);
}, [categories, subCategories, search, sortType]);

  return (
    <section aria-labelledby="title-collectionsPage" className="px-4 md:px-8 pb-10">
      <div className="w-full bg-gray-200 h-px mb-8"></div>
      <div className={`relative w-full ${showInputSearch ? "h-30" : "h-0"} transition-[height] duration-500 bg-gray-50 mb-8 px-12 flex flex-col justify-center items-center`}>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search..." className={`w-full ${showInputSearch ? "h-16 opacity-100" : "h-0 opacity-0"} rounded-md outline-none border border-[#C7C7C7] pl-4 placeholder:text-[#9A9A9A] placeholder:text-[14px] placeholder:font-normal`}/>
        {showInputSearch && <button className="cursor-pointer" onClick={()=>{setSearch(""); setShowInputSearch(false);}}>
          <img src={assets.cross_icon} alt="close-icon" className="w-4 absolute right-4 top-4"/>
        </button>}
      </div> 
      <div className="flex flex-col lg:flex-row gap-4">
        {/* LEFT */}
        <div className="mt-10 w-full max-w-[30%]">
          <span className="uppercase font-normal text-[25px] text-[#343434]">Filters</span>
          <div className="mt-2 flex flex-col gap-4">
            <div className="p-5 h-42.25 w-65 border border-[#C8C8C8]">
              <span className="uppercase text-[#212121] text-[16px] font-normal">Categories</span>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-[#272727] text-base font-light flex items-center gap-2">
                  <input onChange={handleCategories} type='checkbox' value="Men" className="w-5 h-5 border border-[#C1C1C1] rounded-xs"/>
                  Men
                </p>
                <p className="text-[#272727] text-base font-light flex items-center gap-2">
                  <input onChange={handleCategories} type='checkbox' value="Women" className="w-5 h-5 border border-[#C1C1C1] rounded-xs"/>
                  Women
                </p>
                <p className="text-[#272727] text-base font-light flex items-center gap-2">
                  <input onChange={handleCategories} type='checkbox' value="Kids" className="w-5 h-5 border border-[#C1C1C1] rounded-xs"/>
                  Kids
                </p>
              </div>
            </div>
            <div className="p-5 h-42.25 w-65 border border-[#C8C8C8]">
              <span className="uppercase text-[#212121] text-[16px] font-normal">Type</span>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-[#272727] text-base font-light flex items-center gap-2">
                  <input onChange={handleSubCategories} type='checkbox' value="Topwear" className="w-5 h-5 border border-[#C1C1C1] rounded-xs"/>
                  Topwear
                </p>
                <p className="text-[#272727] text-base font-light flex items-center gap-2">
                  <input onChange={handleSubCategories} type='checkbox' value="Bottomwear" className="w-5 h-5 border border-[#C1C1C1] rounded-xs"/>
                  Bottomwear
                </p>
                <p className="text-[#272727] text-base font-light flex items-center gap-2">
                  <input onChange={handleSubCategories} type='checkbox' value="Winterwear" className="w-5 h-5 border border-[#C1C1C1] rounded-xs"/>
                  Winterwear
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:max-w-[70%]">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <HeadingText myClass={"justify-center"} id={"title-collectionsPage"} text1={"All"} text2={"Collections"}/>
            <Select value={sortType} onValueChange={toggleChangeSort}>
              <SelectTrigger className="w-50">
                <SelectValue placeholder="Relavent" />
              </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Relavent">Sortby:Relavent</SelectItem>
                    <SelectItem value="Low to High">Sortby:Low to High</SelectItem>
                    <SelectItem value="High to Low">Sortby:High to Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
            </Select>
          </div>
          <div className="mt-8">
            {/* PRODUCTS */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((item , index)=>(
                <Product key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} currency={currency}/>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-5 flex justify-center items-center flex-wrap gap-4">
              <button onClick={()=>setPage(page - 1) } disabled={page === 1} className={`cursor-pointer ${page === 1 ? "cursor-not-allowed bg-[#707070] text-white" : "bg-black/10"} cursor-pointer w-20 h-10`}>previous</button>
              {Array.from({length: totalPages}).map((_, index)=>(
                <button key={index} onClick={()=> setPage(index+1)} className={`cursor-pointer ${page === index+1 ? "bg-pink-200 text-black" : "bg-black text-white"} w-10 h-10`}>{index+1}</button>
              ))}
              <button onClick={()=>setPage(page + 1) } disabled={page === totalPages} className={`cursor-pointer ${page === totalPages ? "cursor-not-allowed bg-[#707070] text-white" : "bg-black/10"} cursor-pointer w-20 h-10`}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection