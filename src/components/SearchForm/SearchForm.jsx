import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changeQuery } from 'redux/search/searchSlice';

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query === '') {
      toast.error(`Enter your query`, {
        position: 'top-center',
      });
      setSearchQuery();
    }
    console.log(searchQuery);
    setSearchQuery(query);
    dispatch(changeQuery(searchQuery));
    console.log(searchQuery);
    return navigate(`/search?query=${query}`);
  }

  return (
    <div className="w-[295px] md:w-[369px] xl:w-[510px] h-[52px] xl:h-[71px] rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] border-grey1 border-solid border mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="text-secondaryText dark:text-greyInput font-main text-base leading-6 w-full h-full  border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] bg-white dark:bg-accentDarker pl-[48px]"
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
