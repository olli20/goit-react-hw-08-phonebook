import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import styles from './navbar.module.scss';

import Button from '../../shared/components/Button/Button';

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
}

const NavbarUser = () => {
    const { name } = useSelector(getUser);

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <div className={styles.auth}>
            <NavLink className={getClassList} to={"/"}>Home</NavLink>
            <NavLink className={getClassList} to={"/contacts"}>Contacts</NavLink>
            <p>Hello, {name} </p>
            <Button onClick={handleLogout} className={styles.logout}>Log out</Button>
        </div>
    )
}

export default NavbarUser;