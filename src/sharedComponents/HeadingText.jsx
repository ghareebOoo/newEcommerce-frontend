
const HeadingText = ({id , text1 , text2 , myClass}) => {
  return (
    <>
      <div className={`flex items-center ${myClass} gap-2`}>
        <h2 id={id} className="text-[#707070] uppercase font-semibold text-[18px] md:text-[24px] lg:text-[35px]">{text1} <span className="text-[#343434]">{text2}</span></h2>
        <hr className="w-12.5 h-0.5 bg-[#2A2A2A] rounded-[10px]"/>
      </div>
    </>
  )
}

export default HeadingText