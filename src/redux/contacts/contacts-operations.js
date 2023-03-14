import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/api-service';

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, {rejectWithValue}) => {
        try {
            const data = await api.getAllContactsFromServer();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        };
    }
);

const isDublicated = (name, contacts) => {
    const result = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length;
    return Boolean(result);
};

export const fetchAddContact = createAsyncThunk(
    'contacts/addContact',
    async (data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        };
    },
    {
        condition: ({name}, {getState}) => {
            const {contacts} = getState();
            if(isDublicated(name, contacts.items)) {
                alert(`${name} is already in contacts`);
                return false;
            };
        }
    }
);

export const fetchDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue}) => {
        try {
            await api.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
