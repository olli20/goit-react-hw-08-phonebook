import {useMemo} from 'react';
import {nanoid} from 'nanoid';

import styles from './text-field.module.scss';

const TextField = ({label, handleChange, ...props}) => {
    const id = useMemo(()=> nanoid(), []);

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={styles.input} id={id} onChange={handleChange} {...props} />
        </div>
    );
}

export default TextField;