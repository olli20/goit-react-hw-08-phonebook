import { useState, useCallback } from "react";

import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";
import Card from '../../shared/components/Card/Card';

// import useForm from '../../shared/hooks/useForm';
import fields from './fields';
import initialState from "./initialState";
import styles from './register-form.module.scss';

const RegisterForm = ({onSubmit}) => {
    const [state, setState] = useState({...initialState})

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }, [setState]);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState});
    };

    const {name, email, password} = state;

    return (
        <Card className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField value={name} handleChange={handleChange} {...fields.name} />
                <TextField value={email} handleChange={handleChange} {...fields.email} />
                <TextField value={password} handleChange={handleChange} {...fields.password} />
                <Button className={styles.button} type="submit" disabled={false}>Register</Button>
            </form>
        </Card>
    );
};

export default RegisterForm;