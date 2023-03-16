import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "shared/components/Loading/Loading";

import { getAuth } from "redux/auth/auth-selectors";

const PrivatRoute = () => {
    const { isLogin, token } = useSelector(getAuth);
    
    if (!isLogin && token) {
        return <Loading />;
    }

    if (!isLogin && !token) {
        return <Navigate to="/login" />;
    };

    return <Outlet />;
}

export default PrivatRoute;