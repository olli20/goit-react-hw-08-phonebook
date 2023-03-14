import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {login} from '../../redux/auth/auth-operations';
import {isUserLogin} from '../../redux/auth/auth-selectors';

import LoginForm from '../../modules/LoginForm/LoginForm';

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
        console.log("LoginPage says ", data)
    };

    if(isLogin) {
        return <Navigate to="/contacts" />;
    }

    return (
        <LoginForm onSubmit={handleLogin} />
    );
}

export default LoginPage;