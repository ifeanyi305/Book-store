// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookContainer from './Book/bookcontainer';
import Categories from './Categories';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);

export default App;
