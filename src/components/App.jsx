import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
  };

  formSubmitHandler = contact => {
    console.log(contact);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterContacts = e => {
    const { value } = e.target;
    console.log();

    const filterItems = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ filter: [filterItems] });

    console.log(this.state.filter);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
