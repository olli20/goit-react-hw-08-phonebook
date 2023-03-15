import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';

import {isUserLogin} from '../../redux/auth/auth-selectors';

import styles from './navbar.module.scss';

const Navbar = () => {
    const isLogin = useSelector(isUserLogin);
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.logo}>Phonebook</Link>
                <div className={styles.auth}>
                    {/* {isLogin && <NavbarUser />}
                    {!isLogin && <NavbarAuth />} */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;