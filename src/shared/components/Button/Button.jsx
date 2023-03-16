import PropTypes from 'prop-types';

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

Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}
