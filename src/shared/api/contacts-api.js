import instance from './auth-api';

// const contactsInstance = axios.create({
//     baseURL: "https://6405e28eeed195a99f8f9e74.mockapi.io/api/contacts",
// })

export const getAllContactsFromServer = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
