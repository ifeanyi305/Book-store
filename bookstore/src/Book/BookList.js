import React from 'react';
import BookItem from './bookItem';
const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem book={book} /> 
      ))}
    </div>
  );
};

export default BookList;