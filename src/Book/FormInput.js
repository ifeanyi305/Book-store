import React from 'react';

const FormInput = () => (
  <div>
    <form>
      <input
        type="text"
        className="input-text"
        placeholder="Add title"
        name="title"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add author"
        name="author"
      />
      <button>add</button>
    </form>
  </div>
);

export default FormInput;
