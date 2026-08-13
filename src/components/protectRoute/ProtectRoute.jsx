import { useAuthContext } from '../../../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({children}) => {
    const {user} = useAuthContext();

    if(user){
        return children;
    }else{
        return <Navigate to="/login"/>
    }
};

export default ProtectRoute