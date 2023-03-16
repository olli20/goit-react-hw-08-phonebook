import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {signup} from '../../redux/auth/auth-operations';
import {isUserLogin, getError} from '../../redux/auth/auth-selectors';

import Error from 'shared/components/Error/Error';
import RegisterForm from '../../modules/RegisterForm/RegisterForm';

import styles from './register-page.module.scss';

const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    const handleSingup = (data) => {
        dispatch(signup(data));
    };

    if (isLogin) {
        return <Navigate to="/contacts" />;
    };

    return (
        <div className={styles.container}>
            <RegisterForm onSubmit={handleSingup} />
            {error && <Error className={styles.error}>Some error was occurred</Error>}
        </div>
    );
};

export default RegisterPage;