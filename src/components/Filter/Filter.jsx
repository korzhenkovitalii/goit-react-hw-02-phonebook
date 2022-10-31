// import css from 'components/Filter/Filter.module.css';

export const Filter = ({ filterContacts }) => {
  return (
    <>
      <h2>Find contact by name</h2>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={filterContacts}
      />
    </>
  );
};
