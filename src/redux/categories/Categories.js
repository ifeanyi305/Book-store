import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'under construction',
  },
});

export default categorySlice.reducer;
export const { checkStatus } = categorySlice.actions;
