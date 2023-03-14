import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {signup} from '../../redux/auth/auth-operations';
import {isUserLogin} from '../../redux/auth/auth-selectors';

import RegisterForm from '../../modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleSingup = (data) => {
        dispatch(signup(data));
        console.log("RegisterPage says ", data)
    };

    if(isLogin) {
        return <Navigate to="/contacts" />;
    }

    return (
        <RegisterForm onSubmit={handleSingup} />
    );
}

export default RegisterPage;