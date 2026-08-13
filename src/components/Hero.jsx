import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <section aria-labelledby="Hero-title" className="px-4 md:px-8 py-10">
      <div className="border border-[#2A2A2A] flex flex-col lg:flex-row  items-center">
        <div className="w-full p-8 flex flex-col gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <hr className="w-12.5 h-0.5 bg-[#2A2A2A] rounded-[10px]"/>
            <p className="uppercase text-[#414141] text-[18px] font-medium">Our Bestseller</p>
          </div>
          <h1 id="Hero-title" className="text-[30px] md:text[40px] lg:text-[60px] text-[#414141] font-medium">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <span className="uppercase text-[18px] text-[#414141] font-semibold">Shop Now</span>
            <hr className="w-12.5 h-0.5 bg-[#2A2A2A] rounded-[10px]"/>
          </div>
        </div>
        <div className="w-full p-0.5">
          <img src={assets.hero_img} className="w-full" alt="hero-imgae"/>
        </div>
      </div>
    </section>
  )
}

export default Hero