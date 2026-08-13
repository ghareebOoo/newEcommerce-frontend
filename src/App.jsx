import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/about/About";
import Collection from "./pages/collection/Collection";
import Contact from "./pages/contact/Contact";
import ProductDetails from "./pages/productDeatails/ProductDetails";
import { ToastContainer } from 'react-toastify';
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import GuestRout from "./components/guestRoute/GuestRout";
import ProtectRoute from "./components/protectRoute/ProtectRoute";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";

function App() {
  const routes = createBrowserRouter([
    {path: "/", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "collection", element: <Collection /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "contact", element: <Contact /> },
        {path: "cart", element: (<ProtectRoute><Cart /></ProtectRoute>), },
        {path: "checkout",element: (<ProtectRoute><Checkout /></ProtectRoute>),},
        {path: "orders",element: (<ProtectRoute><Orders /></ProtectRoute>),},
        {path: "login",element: (<GuestRout><Login /></GuestRout>),},
        {path: "forgotPassword",element: (<GuestRout><ForgotPassword /></GuestRout>),},
        {path: "resetPassword/:token",element: (<GuestRout><ResetPassword /></GuestRout>),},
        {path: "updatePassword/",element: (<UpdatePassword />),},
      ],
    }
  ]);
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer />
    </>
  )
}

export default App
