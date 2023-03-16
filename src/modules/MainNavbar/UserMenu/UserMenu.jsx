import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../../redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import styles from '../navbar.module.scss';

const NavbarUser = () => {
    const { email } = useSelector(getUser);

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={styles.auth}>
            <p className={styles.user}>{email}</p>
            <button onClick={handleLogout} className={styles.logoutBtn}>
                Log out
            </button>
        </div>
    );
}

export default NavbarUser;