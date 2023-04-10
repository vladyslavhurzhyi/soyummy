import { useDispatch } from 'react-redux';
import { selectQueryType } from 'redux/search/selectors';
import { useSelector } from 'react-redux';
import searchSlice from 'redux/search/searchSlice';
// import { searchSlice } from 'redux/search/searchSlice';

export const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const queryType = useSelector(selectQueryType);

  const changeType = e => {
    //const type = e.target.value;
    dispatch(searchSlice.changeType(e.target.value));
    //dispatch(searchSlice.actions.changeQueryType(type));
  };

  return (
    <div className="mx-auto justify-center flex items-center gap-5">
      <label>Search by:</label>
      <select value={queryType} onChange={changeType}>
        <option value="title">title</option>
        <option value="ingredients">ingredient</option>
      </select>
    </div>
  );
};
