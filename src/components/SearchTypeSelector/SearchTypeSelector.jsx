import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQueryType } from 'redux/search/searchSlice';
import { useLocation } from 'react-router-dom';
const typesList = [{ searchType: 'title' }, { searchType: 'ingredients' }];

export const SearchTypeSelector = () => {
  const location = useLocation();
  console.log(location.state);
  const [currentValue, setCurrentValue] = useState(
    location.state?.from || 'title'
  );
  console.log(currentValue);
  const dispatch = useDispatch();

  const changeType = e => {
    const type = e.target.value;
    setCurrentValue(type);
    dispatch(changeQueryType(type));
  };

  return (
    <div className="relative z-0 w-40 mt-4 md:mt-6 gap-[18px]">
      <select
        name="select"
        value={currentValue}
        onChange={e => changeType(e)}
        className="pt-2 pb-1 md:pt-3 md:pb-2 block w-full px-0 mt-0 text-center text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"
      >
        {typesList.map(({ searchType }) => (
          <option
            key={searchType}
            value={searchType}
            className="bg-accentGray dark:bg-accentMain text-center"
          >
            {searchType}
          </option>
        ))}
      </select>
      <label
        htmlFor="select"
        className="absolute duration-300 top-1 -z-1 origin-0  text-mainText font-main font-semibold text-customXs md:text-[18px] lg:text-customeBase dark:text-whiteText"
      >
        Search by:
      </label>
    </div>
    // <div className="mx-auto justify-center flex items-center gap-5">
    //   <label className="text-[18px]">Search by:</label>
    //   <select
    //     onChange={changeType}
    //     className="border-none bg-accentGray color-greenSelectArrow h-[49px] text-[14px]"
    //   >
    //     <option className="bg-whiteText border-none" value="title">
    //       title
    //     </option>
    //     <option value="ingredients" className="bg-whiteText border-none">
    //       ingredient
    //     </option>
    //   </select>
    // </div>
  );
};
