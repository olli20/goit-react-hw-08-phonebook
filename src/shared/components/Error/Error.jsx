import PropTypes from 'prop-types';

import styles from './error.module.scss';

const Error = ({ children, className }) => {
    const classes = `${styles.error} ${className}`;
    return (
        <div className={classes}>
            <p>{children}</p>
        </div>
    )
}

export default Error;

Error.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}
