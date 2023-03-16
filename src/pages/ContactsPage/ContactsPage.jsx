import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import ContactForm from '../../modules/ContactForm';
import Filter from '../../modules/Filter';
import ContactList from '../../modules/ContactList';
import Card from 'shared/components/Card/Card';
import Loading from 'shared/components/Loading/Loading';

import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from '../../redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';
import { getAllContacts, getFilteredContacts, getLoading, getError } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import styles from './contacts-page.module.scss';

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
  const noContacts = contacts?.length > 0;
  
  return (
    <main className={styles.main}>
      <Card className={styles.contacts}>
        <h1 className={styles.title}>Your contacts</h1>
        <Filter filter={filter} changeFilter={filterHandler} />
        {isItems && <ContactList contacts={filteredContacts} onRemoveContact={removeHandler} />}
        {!noContacts && <p>You have no added contacts jet</p>}
        {loading && <Loading />}
        {Boolean(error) && <p>{error}</p>}
      </Card>
      
      <ContactForm onSubmit={submitHandler} contacts={contacts} />
    </main>
  );
}

export default ContactsPage;