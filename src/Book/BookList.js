import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <BookItem book={book} key={book.id} />
    ))}
  </div>
);
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
