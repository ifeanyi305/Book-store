import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nCNvE04R6VJUlYhIkBBv/books';
const initialState = [];

function processAPIData(res) {
  const newObj = Object.entries(res).map(
    ([key, value]) => Object.assign(value[0], { item_id: key }),
  );
  return newObj;
}

export const getAllBooks = createAsyncThunk('books/getAllBooks',
  async () => {
    const response = await axios.get(BASE_URL);
    const payload = processAPIData(response.data);
    return payload;
  });

export const addBook = createAsyncThunk('books/addBook',
  // eslint-disable-next-line
  async (payload) => {
    await axios.post(BASE_URL, payload);
    return payload;
  });

export const removeBook = createAsyncThunk('books/removeBook',
  // eslint-disable-next-line
  async (item_id) => {
    // eslint-disable-next-line
    await axios.delete(`${BASE_URL}/${item_id}`);
    // eslint-disable-next-line
    return item_id;
  });

const bookSlice = createSlice({
  name: 'books',
  initialState,
  // eslint-disable-next-line
  extraReducers: builder => {
    builder.addCase(addBook.fulfilled, (state, action) => [...state, action.payload]);
    builder.addCase(removeBook.fulfilled, (state, action) => {
      if (action.payload) {
        return state.filter((book) => book.item_id !== action.payload);
      }
      return state;
    });
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      if (action.payload === '') {
        return state;
      }
      return [...action.payload];
    });
  },
});
export default bookSlice.reducer;
// export const { addBook, removeBook } = bookSlice.actions;
