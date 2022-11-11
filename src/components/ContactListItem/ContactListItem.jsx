import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  console.log(id, name, number);
  return (
    <li className={css.contact} key={id}>
      {name}:{number}
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
