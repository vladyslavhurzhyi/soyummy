import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import React, { useState } from 'react';

export const SearchForm = ({ handleOnSubmit, type = 'title', startQuery }) => {
  const [searchValue, setInputValue] = useState(startQuery ?? '');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleOnSubmit(searchValue, type);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
        ></input>
        <CurveBtn type="submit" text="Search"></CurveBtn>
      </form>
    </div>
  );
};
