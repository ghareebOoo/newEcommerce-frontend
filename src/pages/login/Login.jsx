import NewsLetter from "@/components/NewsLetter"
import HeadingText from "@/sharedComponents/HeadingText"
import { useEffect, useState } from "react"
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, signup } from "@/api/authApi";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";


const Login = () => {

    const {setUser} = useAuthContext();
    const [changeState , setChangeState] = useState('login');
    const [errorServer , setErrorServer] = useState('');

    const navigate = useNavigate();

    const signupSchema = z.object({
        name: z.string().min(3, 'name must be at least 3 characters').max(25, 'name must be less than 25 characters'),
        email: z.string().email('please enter a valid email'),
        password: z.string().min(8 ,'password at least must be 8 characters'),
        passwordConfirm: z.string().min(8 ,'password at least must be 8 characters'),
    }).refine((data)=> data.password === data.passwordConfirm ,{
        path:['passwordConfirm'],
        message: "passwords are not the same"
    });

    const loginSchema = z.object({
        email: z.string().email('please enter a valid email'),
        password: z.string().min(8 ,'password at least must be 8 characters'),
    });

    const form = useForm({
        resolver: zodResolver(changeState === "login" ? loginSchema : signupSchema)
    });

    const {register , handleSubmit , formState:{errors} , isSubmitting} = form;

    const onSubmit = async (data)=>{
        try{
            if(changeState === "login"){
            const response = await login(data);
            if(response.data.status === "success"){
                localStorage.setItem("token", response.data.token);
                setUser(response.data.data.user);
                navigate('/');
            }
        }else{
            const response = await signup(data);
            console.log(response.data);
            if(response.data.status === "success"){
                setChangeState('login');
            }
        }
        }catch(err){
            console.log(err.response?.data);
            setErrorServer(err.response?.data.message);
        }
    }

    useEffect(() => {
        form.reset();
        setErrorServer("");
    }, [changeState , form]);

  return (
    <section aria-labelledby={`${changeState === "login" ? "Title-login" : "Title-singup"}`} className="px-4 md:px-8 py-20 gap-16">
        <div className="w-full max-w-129.25 m-auto flex flex-col gap-4">
            <HeadingText id={`${changeState === "login" ? "Title-login" : "Title-singup"}`} text1={`${changeState === "login" ? "login" : "sing"}`} text2={`${changeState === "login" ? "" : "up"}`} myClass={"justify-center"}/>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex flex-col gap-4">
                    <div>
                        {changeState === "signup" ? <input {...register('name')} placeholder="Name" type="text" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>: ""}
                        <p className="text-red-500 text-base font-medium">{errors.name?.message}</p>
                    </div>
                    <div>
                        <input {...register('email')} placeholder="Email" type="email" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>
                        <p className="text-red-500 text-base font-medium">{errors.email?.message}</p>
                        {changeState === "signup" && <p className="text-red-500 text-base font-medium">{errorServer}</p>}
                    </div>
                    <div>
                        <input {...register('password')} placeholder="Password" type="password" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>
                        <p className="text-red-500 text-base font-medium">{errors.password?.message}</p>
                        {changeState === "login" && <p className="text-red-500 text-base font-medium">{errorServer}</p>}
                    </div>
                    <div>
                        {changeState === "signup" ? <input {...register('passwordConfirm')} placeholder="PasswordConfirm" type="password" className="outline-none border border-[#000000] pl-2 w-full h-13.5 placeholder:text-[18px] font-normal text-[#6A6A6A]"/>: ""}
                        <p className="text-red-500 text-base font-medium">{errors.passwordConfirm?.message}</p>
                    </div>
                </div>
                <div className="mb-4 mt-2 flex items-center justify-between"><NavLink to="/forgotPassword" className="font-normal text-[16px] text-[#3C3C3C]">Forgot your password?</NavLink> {changeState === 'login' ? <span onClick={()=> setChangeState('signup')} className="cursor-pointer font-normal text-[16px] text-[#3C3C3C]">Create Account</span> : <span onClick={()=> setChangeState('login')} className="cursor-pointer font-normal text-[16px] text-[#3C3C3C]">Login Here</span>} </div>
                <button type="submit" disabled={isSubmitting} aria-label={changeState === "login" ? "click-to-login": "click-to-signup"} className="bg-[#000000] h-13.5 w-full max-w-37.75 block m-auto cursor-pointer text-[20px] text-[#FFFFFF] font-light disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Loading..." : changeState === "signup"? "Create" : "Sign In"}
                </button>
            </form>
        </div>
        <NewsLetter />
    </section>
  )
}

export default Login