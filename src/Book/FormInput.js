import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

const FormInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBooks = (e) => {
    e.preventDefault();
    if (title.trim() || author.trim()) {
      dispatch(addBook({ title, author }));
    }
    setAuthor('');
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={addBooks}>
        <input
          type="text"
          className="input-text"
          placeholder="Add title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add author"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <button type="submit">add Book</button>
      </form>
    </div>
  );
};

export default FormInput;
