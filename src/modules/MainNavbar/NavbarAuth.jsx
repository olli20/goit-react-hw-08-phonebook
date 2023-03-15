import {NavLink} from 'react-router-dom';

import styles from './navbar.module.scss';

const getClassList = ({ isActive }) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
};

const NavbarAuth = () => {
    return (
        <div className={styles.auth}>
            <NavLink className={getClassList} to="/register">Sing up</NavLink>
            <NavLink className={getClassList} to="/login">Log in</NavLink>
        </div>
    )
}

export default NavbarAuth;