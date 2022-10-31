import React from 'react';
import shortid from 'shortid';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  telInputId = shortid.generate();

  onChangeInput = e => {
    // console.log(e.target.name);
    const { name, value, id } = e.target;

    this.setState({ [name]: value, [id]: this.nameInputId });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name:</label>
        <input
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.onChangeInput}
        />

        <label htmlFor={this.telInputId}>Number:</label>
        <input
          id={this.telInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.onChangeInput}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
