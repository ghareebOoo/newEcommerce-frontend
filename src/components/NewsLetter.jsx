
const NewsLetter = () => {
  return (
    <section aria-labelledby="Newsletter-title" className="px-4 md:px-8 py-10">
        <h2 className="text-center text-[34px] font-medium text-[#373737]">Subscribe now & get 20% off</h2>
        <p className="mt-3 text-center text-[#9A9A9A] text-base md:text-[18px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <form className="mt-10 flex items-center justify-center">
          <input type="email" className="h-15.5 w-full max-w-181 outline-none border border-[#C7C7C7] pl-4 placeholder:text-[#9A9A9A] placeholder:text-[14px] placeholder:font-normal" placeholder="Enter your email"/>
          <button type="submit" className="cursor-pointer h-15.5 w-full max-w-42.75 bg-[#000000] text-white uppercase">Subscribe</button>
        </form>
    </section>
  )
}

export default NewsLetter