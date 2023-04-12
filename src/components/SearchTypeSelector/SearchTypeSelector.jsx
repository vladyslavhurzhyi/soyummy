import { useDispatch } from 'react-redux';
import { changeQueryType } from 'redux/search/searchSlice';

export const SearchTypeSelector = () => {
  const dispatch = useDispatch();

  const changeType = e => {
    const type = e.target.value;
    dispatch(changeQueryType(type));
  };

  return (
    <div className="mx-auto justify-center flex items-center gap-5">
      <label className="text-[18px]">Search by:</label>
      <select
        onChange={changeType}
        className="border-none bg-accentGray color-greenSelectArrow h-[49px] text-[14px]"
      >
        <option className="bg-whiteText border-none" value="title">
          title
        </option>
        <option value="ingredients" className="bg-whiteText border-none">
          ingredient
        </option>
      </select>
    </div>
  );
};
