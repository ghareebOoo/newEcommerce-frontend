import { useAuthContext } from '../../../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

const GuestRout = ({children}) => {

    const {user} = useAuthContext();

    if(user){
        return <Navigate to="/"/>
    }else{
        return children;
    }
}

export default GuestRout