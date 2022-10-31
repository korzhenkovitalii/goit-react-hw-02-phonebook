import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler(name) {
    console.log(name);
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
