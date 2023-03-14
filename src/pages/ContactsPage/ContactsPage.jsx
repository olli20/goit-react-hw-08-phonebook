import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import ContactForm from '../../modules/ContactForm';
import Filter from '../../modules/Filter';
import ContactList from '../../modules/ContactList';

import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from '../../redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';
import { getAllContacts, getFilteredContacts, getLoading, getError } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

const ContactsPage = () => {
  const contacts = useSelector(getAllContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const submitHandler = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const removeHandler = id => {
    dispatch(fetchDeleteContact(id));
  };

  const filterHandler = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isItems = filteredContacts?.length > 0;
  
  return (
    <Fragment>
      <ContactForm onSubmit={submitHandler} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={filterHandler} />
      {isItems && <ContactList contacts={filteredContacts} onRemoveContact={removeHandler} />}

      {loading && <p>Loading...</p>}
      {Boolean(error) && <p>{error}</p>}
    </Fragment>
  );
}

export default ContactsPage;