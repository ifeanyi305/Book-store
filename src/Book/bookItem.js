import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <div>
    <h1>{book.title}</h1>
    <p>{book.author}</p>
    <button type="button">Remove</button>
  </div>
);
// npm i prop-types

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
