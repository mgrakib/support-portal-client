import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    console.log(loading, user)
    const location = useLocation();
    if (loading) {
        return <p>loading...</p>
    }

    if (user) {
        return children
    }
    return <Navigate to={'/'} state={{from: location}} replace/>;
};

export default PrivateRoute;