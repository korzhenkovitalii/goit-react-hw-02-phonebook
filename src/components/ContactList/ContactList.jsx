// import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} : {number}
      </li>
    ))}
  </ul>
);
