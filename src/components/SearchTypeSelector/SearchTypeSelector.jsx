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
      <label>Search by:</label>
      <select onChange={changeType}>
        <option value="title">title</option>
        <option value="ingredients">ingredient</option>
      </select>
    </div>
  );
};
