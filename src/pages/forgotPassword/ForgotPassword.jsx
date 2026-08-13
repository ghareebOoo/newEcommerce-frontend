import NewsLetter from "@/components/NewsLetter"
import HeadingText from "@/sharedComponents/HeadingText"
import { useEffect, useState } from "react"
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/api/authApi";



const Login = () => {

    const [errorServer , setErrorServer] = useState('');


    const forgotSchema = z.object({
        email: z.string().email('please enter a valid email'),
    });

    const form = useForm({
        resolver: zodResolver(forgotSchema)
    });

    const {register , handleSubmit , formState:{errors} , isSubmitting} = form;

    const onSubmit = async (data)=>{
        try{
            const response = await forgotPassword(data);
            if(response.data.status === "success"){
                console.log(response.data);
            };
        }catch(err){
            console.log(err.response?.data);
            setErrorServer(err.response?.data.message);
        }
    }

    useEffect(() => {
        form.reset();
        setErrorServer("");
    }, [form]);

  return (
    <section aria-labelledby="Title-forgotPassword" className="px-4 md:px-8 py-20 gap-16">
        <div className="w-full max-w-129.25 m-auto flex flex-col gap-4">
            <HeadingText id='Title-forgotPassword' text1={"Forgot"} text2={"Password"} myClass={"justify-center"}/>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mb-4">
                    <input {...register('email')} placeholder="Email" type="email" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>
                    <p className="text-red-500 text-base font-medium">{errors.email?.message}</p>
                    <p className="text-red-500 text-base font-medium">{errorServer}</p>
                </div>
                <button type="submit" disabled={isSubmitting} aria-label={'Send-to-yourEmail'} className="bg-[#000000] h-13.5 w-full max-w-37.75 block m-auto cursor-pointer text-[20px] text-[#FFFFFF] font-light disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Loading..." : "Send"}
                </button>
            </form>
        </div>
        <NewsLetter />
    </section>
  )
}

export default Login