import { useSearchParams } from 'react-router-dom';

export const SearchTypeSelector = () => {
  const [, setSearchParams] = useSearchParams();

  const getType = e => {
    const type = e.target.value;
    console.log(type);
    setSearchParams({ type });
  };

  return (
    <div className="mx-auto justify-center flex items-center gap-5">
      <label>Search by:</label>
      <select name="type" onChange={getType}>
        <option value="title">title</option>
        <option value="ingredients">ingredient</option>
      </select>
    </div>
  );
};
