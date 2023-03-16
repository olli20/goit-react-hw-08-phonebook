import { useSelector } from 'react-redux';

import Card from 'shared/components/Card/Card';

import { isUserLogin, getUser } from 'redux/auth/auth-selectors';

import tech from './tech';

import styles from './home-page.module.scss';

const HomePage = () => {
    const isLogin = useSelector(isUserLogin);
    const { name } = useSelector(getUser);

    return (
        <main className={styles.container}>
            <Card>
                {!isLogin && <h1 className={styles.title}>Welcome</h1>}
                {isLogin && <h1 className={styles.title}>Welcome, {name}</h1>}
                <p className={styles.message}>This App was created using React and other technologies</p>
                <ul className={styles.list}>
                    {tech.map(({ name, id }) => <li key={id} className={styles.item}>{name}</li>)}
                </ul>
            </Card>
        </main>
    );
};

export default HomePage;