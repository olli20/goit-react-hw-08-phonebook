import {NavLink} from 'react-router-dom';

import styles from './nav-bar.module.scss';

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
}

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <p className={styles.logo}>Phonebook</p>
                <div className={styles.auth}>
                    <NavLink className={getClassList} to={"/"}>Home</NavLink>
                    <NavLink className={getClassList} to={"/contacts"}>Contacts</NavLink>
                    <NavLink className={getClassList} to={"/register"}>Sing up</NavLink>
                    <NavLink className={getClassList} to={"/login"}>Log in</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;