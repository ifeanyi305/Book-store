import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="bookInfo">
        <span className="fiction">Fiction</span>
        <p className="title">{book.title}</p>
        <p>{book.author}</p>
        <div className="btn-con">
          <button type="button" className="remove-btn">Comments</button>
          <button
            type="button"
            className="remove-btn"
            onClick={() => { dispatch(removeBook(book.item_id)); }}
          >
            Remove
          </button>
          <button type="button" className="remove-btn">Edit</button>
        </div>
      </div>
      <div className="book-percent">
        <div className="percentage-rate" />
        <div className="line">
          <h1>64%</h1>
          <small>completed</small>
        </div>
      </div>
      <div className="update">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button" className="update-btn">Update Progress</button>
      </div>
    </div>
  );
};
// npm i prop-types

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default BookItem;
