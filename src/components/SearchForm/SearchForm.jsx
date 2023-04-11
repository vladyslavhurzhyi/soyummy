import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const SearchForm = () => {
  const [searchValue, setInputValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchValue.toLowerCase();
    if (query === '') {
      alert('enter something to find');
      setSearchParams();
      return;
    }

    console.log(query);
    setSearchParams({ query });
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
          className="text-greyInput font-main text-base leading-6 w-full h-full  border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] bg-white dark:bg-accentDarker"
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
