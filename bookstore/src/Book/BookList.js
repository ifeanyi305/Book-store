import React from 'react';
import BookItem from './bookItem';

const BookList = ({ books }) => {
  return (
    <div>
      <ul>
      {books.map((book) => (
        <li>
          <BookItem book={book}/> 
        </li>
      ))}
      </ul>
    </div>
  );
};

export default BookList;