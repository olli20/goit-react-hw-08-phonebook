import { useDispatch } from 'react-redux';

import {signup} from '../../redux/auth/auth-operations';

import RegisterForm from '../../modules/RegisterForm/RegisterForm';

console.log(signup);

const RegisterPage = () => {
    const dispatch = useDispatch()

    const handleSingup = (data) => {
        dispatch(signup(data));
        console.log("RegisterPage says ", data)
    };

    return (
        <RegisterForm onSubmit={handleSingup} />
    );
}

export default RegisterPage;