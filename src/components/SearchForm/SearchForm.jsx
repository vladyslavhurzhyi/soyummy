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
    <div className="w-[295px] md:w-[369px] xl:w-[510px] h-[52px] xl:h-[71px] rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] border-grey1 border-solid border mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative"
      >
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className="text-greyInput font-main text-base leading-6 w-full h-full  border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] bg-transparent"
        />
        <CurveBtn
          type="submit"
          text="Search"
          cssClass="searchbl-btn absolute right-[-1px] -top-0.5 h-[53px] xl:h-[72px] dark:bg-accentMain"
        ></CurveBtn>
      </form>
    </div>
  );
};
