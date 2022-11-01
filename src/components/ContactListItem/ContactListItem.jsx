import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ contacts, deleteContact }) => {
  return contacts.map(contact => {
    return (
      <li key={contact.id} className={css.contact}>
        {contact.name}:{contact.number}
        <button
          className={css.button}
          type="button"
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
