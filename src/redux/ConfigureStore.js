import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/Books';
import categoryReducer from './categories/Categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
