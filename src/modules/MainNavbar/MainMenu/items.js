import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
    privacy: true,
    publicity: true,
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
    privacy: true,
    publicity: false,
  },
  {
    id: nanoid(),
    text: 'Sign up',
    link: '/register',
    privacy: false,
    publicity: true,
  },
  {
    id: nanoid(),
    text: 'Log in',
    link: '/login',
    privacy: false,
    publicity: true,
  },
];

export default items;
