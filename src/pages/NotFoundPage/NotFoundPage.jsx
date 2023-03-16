import { Link } from 'react-router-dom';

import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Page was not found</p>
            <Link to="/" className={styles.link}>Home page</Link>
        </div>
        
    )
}

export default NotFoundPage;