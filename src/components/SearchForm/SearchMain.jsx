import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { useNavigate } from 'react-router-dom';
export const SearchMain = ({
  handleOnSubmit,
  type = 'title',
  styled,
  startQuery,
}) => {
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
        className="flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Beef |"
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
