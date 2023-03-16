import styles from './global-loading.module.scss';

const GlobalLoading = () => {
    return (
        <div className={styles.container}>
            <p className={styles.message}>Loading...</p>
        </div>
    );
};

export default GlobalLoading;