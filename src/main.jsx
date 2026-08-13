import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EcommerceContextProvider from "../context/EcommerceContext.jsx";
import AuthContextProvider from '../context/AuthContext.jsx';
import ProductContextProvider from '../context/ProductContext.jsx';
import CartContextProvider from '../context/CartContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <EcommerceContextProvider>
            <App />
          </EcommerceContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
