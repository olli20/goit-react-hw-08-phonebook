const fields = {
  name: {
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
    label: 'Name',
    placeholder: '',
  },
  number: {
    type: 'text',
    name: 'number',
    pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{0,4}[-.s]?d{0,4}[-.s]?d{1,9}',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    required: true,
    label: 'Number',
    placeholder: '',
  },
};

export default fields;
