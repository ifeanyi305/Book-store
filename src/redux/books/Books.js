import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const initialState = [
  {
    id: uuid4(),
    title: 'ifeanyi',
    author: 'merchant of venice',
  },
  {
    id: uuid4(),
    title: 'joseph',
    author: 'things fall apart',
  },
  {
    id: uuid4(),
    title: 'antony',
    author: 'go to the ant',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      if (action.payload.title && action.payload.author) {
        const newBook = {
          id: uuid4(),
          title: action.payload.title,
          author: action.payload.author,
        };
        return [...state, newBook];
      }
      return state;
    },
    removeBook(state, action) {
      if (action.payload) {
        return state.filter((book) => book.id !== action.payload);
      }
      return state;
    },
  },
});
export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
