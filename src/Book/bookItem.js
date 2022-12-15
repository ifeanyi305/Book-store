import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <button
        type="button"
        onClick={() => { dispatch(removeBook(book.id)); }}
      >
        Remove
      </button>
    </div>
  );
};
// npm i prop-types

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.func,
  }).isRequired,
};

export default BookItem;
