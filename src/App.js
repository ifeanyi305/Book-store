// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookContainer from './Book/bookcontainer';
import Categories from './Categories';
import Header from './Navbar';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
