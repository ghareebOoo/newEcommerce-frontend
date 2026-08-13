import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
    <section className="px-4 md:px-8 py-10">
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
            <div className="flex flex-col items-center gap-2">
                <img className="w-10" src={assets.exchange_icon} alt="exchange-icon"/>
                <h3 className="text-[#373737] text-[18px] font-semibold">Easy Exchange Policy</h3>
                <p className="text-center text-[#898989] text-base text-[18px] font-normal">We offer hassle free  exchange policy</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img className="w-10" src={assets.quality_icon} alt="exchange-icon"/>
                <h3 className="text-[#373737] text-[18px] font-semibold">7 Days Return Policy</h3>
                <p className="text-center text-[#898989] text-base text-[18px] font-normal">We provide 7 days free return policy </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img className="w-10" src={assets.support_img} alt="exchange-icon"/>
                <h3 className="text-[#373737] text-[18px] font-semibold">Best Customer Support</h3>
                <p className="text-center text-[#898989] text-base text-[18px] font-normal">We provide 24/7 customer support</p>
            </div>
        </div>
    </section>
  )
}

export default OurPolicy