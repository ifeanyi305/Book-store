import React from 'react';
import { useSelector } from 'react-redux';
import FormInput from './FormInput';
import BookItem from './bookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="main-container">
        <div>
          {books.map((book) => (
            <BookItem book={book} key={book.item_id} />
          ))}
        </div>
        <FormInput />
      </div>
    </>
  );
};

export default BookList;
