import styles from './card.module.scss';

const Card = ({className, children}) => {
    const classes = `${styles.card} ${className}`;
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card;