import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import FormInput from './FormInput';

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      <BookList books={books} />
      <FormInput />
    </div>
  );
};

export default BookContainer;
