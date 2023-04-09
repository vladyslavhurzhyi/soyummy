import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setInputValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleInputChange(e) {
    setInputValue(e.target.value);
    console.log(searchValue);
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

    onSubmit(query);
    setInputValue('');
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
          className="text-greyInput font-main text-base leading-6 w-full h-full  border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px]"
        />
        <CurveBtn
          type="submit"
          text="Search"
          cssClass="searchbl-btn absolute right-[-1px] -top-0.5 h-[53px] xl:h-[72px]"
        ></CurveBtn>
      </form>
    </div>
  );
};
