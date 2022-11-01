export const ContactListItem = ({ contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} : {number}
      </li>
    ))}
  </>
);
