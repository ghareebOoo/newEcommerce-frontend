import { useState } from 'react';
import {EcommerceContext} from './createEcommerceContext';

const EcommerceContextProvider = ({ children }) => {

    const [showNavMobile , setShowNavMobile] = useState(false);
    const [showInputSearch , setShowInputSearch] = useState(false);
    const currency = "$";
    const shipping_Fee= 10;

  return (
    <EcommerceContext.Provider value={{showNavMobile , setShowNavMobile , showInputSearch , setShowInputSearch , currency , shipping_Fee }}>
        {children}
    </EcommerceContext.Provider>
  )
}

export default EcommerceContextProvider;