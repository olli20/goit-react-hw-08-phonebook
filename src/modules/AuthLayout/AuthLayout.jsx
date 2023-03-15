import {useEffect, Fragment} from 'react';

import {useDispatch} from 'react-redux';

import {user} from '../../redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(user());
    }, [dispatch]);

    return (
        <Fragment>{children}</Fragment>
    );
};

export default AuthLayout;


