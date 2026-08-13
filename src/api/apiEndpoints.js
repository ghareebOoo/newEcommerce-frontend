const apiEndpoints = {
    REGISTER: '/newEcommerce/users/signup',
    LOGIN: '/newEcommerce/users/login',
    LOGOUT: '/newEcommerce/users/logout',
    FORGOTPASSWORD: '/newEcommerce/users/forgotPassword',
    RESETPASSWORD: '/newEcommerce/users/resetPassword',
    UPDATEPASSWORD: '/newEcommerce/users/updatePassword',
    GETME: '/newEcommerce/users/me',
    GETPRODUCTS: '/newEcommerce/products',
    GETBESTSELLER: '/newEcommerce/products/bestSeller',
    GETPRODUCT: '/newEcommerce/products',
    ADDPRODUCT: '/newEcommerce/products/add',
    ADDTOCART: '/newEcommerce/cart/add',
    UPDATECART: '/newEcommerce/cart/update',
    DELETEPRODUCT: '/newEcommerce/cart/delete',
    DELETEALL: '/newEcommerce/cart/deleteAll',
    USERCART: '/newEcommerce/cart/userCart',
    COD: '/newEcommerce/orders/cod',
    STRIPE: '/newEcommerce/orders/stripe',
    USERORDERS: '/newEcommerce/orders/userOrders',
};

export default apiEndpoints;


