// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBooks } from './redux/books/Books';
import BookList from './Book/BookList';
import Categories from './Categories';
import Header from './Navbar';

function App() {
  const dispatch = useDispatch();
  dispatch(getAllBooks());
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
