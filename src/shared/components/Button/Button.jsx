import styles from './button.module.scss';

const Button = ({className, disabled, type, onClick, children}) => {
    return (
        <button
            type={type || 'button'}
            className={`${className} ${styles.button}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>

    );
};

export default Button;