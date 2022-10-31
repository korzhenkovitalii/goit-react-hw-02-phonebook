// import css from 'components/ContactForm/ContactForm.module.css'
import React from 'react';

class ContactForm extends React.Component {
  state = {
    name: '',
  };

  handleNameChange = e => {
    // console.log(e.target.name);
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);

    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
