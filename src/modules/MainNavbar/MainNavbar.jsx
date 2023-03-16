import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import MainMenu from './MainMenu/MainMenu';
import UserMenu from './UserMenu/UserMenu';

import {isUserLogin} from '../../redux/auth/auth-selectors';

import styles from './navbar.module.scss';

const MainNavbar = () => {
    const isLogin = useSelector(isUserLogin);
    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.menu}>
                    <Link to="/" className={styles.logo}>Phonebook</Link>
                    <MainMenu />
                </div>
                                
                {isLogin && <UserMenu />}                    
            </div>
        </div>
    );
};

export default MainNavbar;