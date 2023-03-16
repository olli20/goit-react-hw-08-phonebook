import {useState} from 'react';
import PropTypes from 'prop-types';

import Card from 'shared/components/Card/Card';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import fields from './fields';
import initialState from './initialState';

import styles from './contact-form.module.scss';

const ContactForm = ({onSubmit, contacts}) => {
    const [state, setState] = useState({ ...initialState });
    
    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = event => {
        event.preventDefault();

        const isNameAlreadyHere = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length;
        if(isNameAlreadyHere){
           return alert(`${name} is already in contacts`);
        };

        onSubmit({name, number});
        setState({...initialState});
    }
    
    const {name, number} = state;

    return (
        <Card className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField value={name} handleChange={handleChange} {...fields.name} />
                <TextField value={number} handleChange={handleChange} {...fields.number} />
                <Button type="submit" className={styles.button}>Add contact</Button>
            </form>
        </Card>
    )
}

export default ContactForm;

ContactForm.defaultProps = {
    contacts: [],
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
}