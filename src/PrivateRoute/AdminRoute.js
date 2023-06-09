import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/ContextProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <button className="btn">Loading</button>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;