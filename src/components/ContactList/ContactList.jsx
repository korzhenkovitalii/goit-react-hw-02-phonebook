// import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <ul key={id} name={name} number={number}>
          <li>
            {name} : {number}
          </li>
        </ul>
      ))}
    </div>
  );
};
