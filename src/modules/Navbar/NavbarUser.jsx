import {NavLink} from 'react-router-dom';

import styles from './navbar.module.scss';

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
}

const NavbarUser = () => {
    return (
        <div className={styles.auth}>
            <NavLink className={getClassList} to={"/"}>Home</NavLink>
            <NavLink className={getClassList} to={"/contacts"}>Contacts</NavLink>
            <NavLink className={styles.link} to={"/login"}>Log out</NavLink>
        </div>
    )
}

export default NavbarUser;