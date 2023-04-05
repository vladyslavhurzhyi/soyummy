import React, { useState } from 'react';

import { CurveBtn } from 'components/CurveBtn/CurveBtn';

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
        ></input>
        <CurveBtn
          type="submit"
          text="Search"
          cssClass="searchgreen-btn absolute right-0 -top-0.5 h-13"
        ></CurveBtn>
      </form>
    </div>
  );
};
