import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/ContextProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <button className='btn loading btn-success'>Loading</button>
    }
    if (user && user.uid) {
        return children
    } else {
        <Navigate to='/login' state={{ form: location }} replace></Navigate>
    }

};

export default PrivateRoute;