import { useEffect, useState } from "react";
import { AuthContext } from "./createAuthContext";
import { getMe , logout } from "@/api/authApi";


const AuthContextProvider = ({children}) => {
    const [user , setUser] = useState(null);

    useEffect(()=>{
      const fetchUser = async ()=>{
        try{
          const data = await getMe();
          setUser(data);
        }catch(err){
          console.log(err);
          setUser(null)
        }
      };

      fetchUser();
    },[]);

    const logOut = async ()=>{
        try{
          await logout();
          localStorage.removeItem("token");
          setUser(null);
        }catch(err){
          console.log(err);
        }
    };


//   if(user){

//     const getUserCart = async ()=>{

//       try{
//         const response = await getUserCartApi();

//         if(response.data.status === "success"){
//           setCartItems(response.data.cartData);
//         }

//       }catch(err){
//         console.log(err);
//       }
//     };

//     getUserCart();

//   }else{
//     setCartItems({});
//   }

// },[user]);

  return (
    <AuthContext.Provider value={{user , setUser , logOut}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
