import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/auth-operations'; 
import { isUserLogin, getError } from '../../redux/auth/auth-selectors'; 

import LoginForm from '../../modules/LoginForm/LoginForm';
import Error from 'shared/components/Error/Error';

import styles from './login-page.module.scss';

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    };

    if(isLogin) {
        return <Navigate to="/contacts" />;
    }

    return (
        <div className={styles.container}>
            <LoginForm onSubmit={handleLogin} />
            {error && <Error className={styles.error}>Some error was occurred</Error>}
        </div>
    );
}

export default LoginPage;