import PropTypes from 'prop-types';

import TextField from 'shared/components/TextField/TextField';

import styles from './filter.module.scss';

const Filter = ({filter, changeFilter}) => {
    return (
        <div className={styles.filter}>
            <TextField value={filter} handleChange={changeFilter} label="Find contacts by name" />
        </div>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

