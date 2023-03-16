import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { isUserLogin } from 'redux/auth/auth-selectors';

import items from './items';

import styles from '../navbar.module.scss';

const getClassList = ({ isActive }) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
};

const NavbarAuth = () => {
    const isLogin = useSelector(isUserLogin);

    let filteredItems = [];
    if (isLogin) {
        filteredItems = items.filter(({ privacy, publicity }) => privacy || !publicity);
    } else {
        filteredItems = items.filter(({ privacy, publicity }) => !privacy || publicity);
    };

    const elements = filteredItems.map(({ id, text, link }) => {
        return <NavLink key={id} className={getClassList} to={link}>{text}</NavLink>;
    });

    return (
        <div className={styles.auth}>
            {elements}
        </div>
    );
};

export default NavbarAuth;