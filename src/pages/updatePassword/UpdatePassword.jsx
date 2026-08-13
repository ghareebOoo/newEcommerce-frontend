import NewsLetter from "@/components/NewsLetter"
import HeadingText from "@/sharedComponents/HeadingText"
import { useEffect, useState } from "react"
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePassword } from "@/api/authApi";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../hooks/useAuthContext";



const UpdatePassword = () => {

    const {logOut} = useAuthContext();

    const [errorServer , setErrorServer] = useState('');

    const updateSchema = z.object({
        passwordCurrent: z.string().min(8 ,'password at least must be 8 characters'),
        password: z.string().min(8 ,'password at least must be 8 characters'),
        passwordConfirm: z.string().min(8 ,'password at least must be 8 characters'),
    }).refine((data)=> data.password === data.passwordConfirm ,{
        path:['passwordConfirm'],
        message: "passwords are not the same"
    });

    const form = useForm({
        resolver: zodResolver(updateSchema)
    });

    const {register , handleSubmit , formState:{errors} , isSubmitting} = form;

    const onSubmit = async (data)=>{
        try{
            const response = await updatePassword(data);
            if(response.data.status === "success"){
                toast.success('Password updated successfully. please login again');
                logOut();
            };
        }catch(err){
            console.log(err.response?.data);
            setErrorServer(err.response?.data.message);
        }
    }

    useEffect(() => {
        form.reset();
    }, [form]);

  return (
    <section aria-labelledby={'Title-updatePassword'} className="px-4 md:px-8 py-20 gap-16">
        <div className="w-full max-w-129.25 m-auto flex flex-col gap-4">
            <HeadingText id={'Title-updatePassword'} text1={'update'} text2={'password'} myClass={"justify-center"}/>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex flex-col gap-4 mb-4">
                    <div>
                        <input {...register('passwordCurrent')} placeholder="PasswordCurrent" type="password" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>
                        <p className="text-red-500 text-base font-medium">{errors.password?.message}</p>
                        <p className="text-red-500 text-base font-medium">{errorServer}</p>
                    </div>
                    <div>
                        <input {...register('password')} placeholder="Password" type="password" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>
                        <p className="text-red-500 text-base font-medium">{errors.password?.message}</p>
                    </div>
                    <div>
                        <input {...register('passwordConfirm')} placeholder="PasswordConfirm" type="password" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>
                        <p className="text-red-500 text-base font-medium">{errors.passwordConfirm?.message}</p>
                    </div>
                </div>
                <button type="submit" disabled={isSubmitting} aria-label={'Update-password'} className="bg-[#000000] h-13.5 w-full max-w-37.75 block m-auto cursor-pointer text-[20px] text-[#FFFFFF] font-light disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Loading..." : "Create"}
                </button>
            </form>
        </div>
        <NewsLetter />
    </section>
  )
}

export default UpdatePassword