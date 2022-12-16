import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from './redux/categories/Categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="category-con">
      <h1>{categories}</h1>
      <button type="button" className="status-btn" onClick={() => dispatch(checkStatus())}>check status</button>
    </div>
  );
};

export default Categories;
