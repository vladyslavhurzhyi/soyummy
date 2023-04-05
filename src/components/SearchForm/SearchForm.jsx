import React, { useState } from 'react';

import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
    console.log(searchValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchValue.toLowerCase();
    if (query === '') {
      alert('enter something to find');
      return;
    }

    console.log(query);
    onSubmit(query);
    setInputValue('');
  }

  return (
    <div className="w-[510px] h-13 rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] border-grey1 border-solid border">
      <form
        onSubmit={handleSubmit}
        className="flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative"
      >
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className="text-base leading-6 w-full bg-transparent border-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px]"
        />
        <CurveBtn
          type="submit"
          text="Search"
          cssClass="searchgreen-btn absolute right-0 -top-0.5 h-13"
        ></CurveBtn>
      </form>
    </div>
  );
};
