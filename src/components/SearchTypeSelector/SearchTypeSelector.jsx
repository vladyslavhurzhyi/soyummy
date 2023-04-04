export const SearchTypeSelector = () => {
  return (
    <div className="flex items-center gap-5">
      <label htmlFor="search-type">Search by:</label>
      <select id="search-type" name="search-type">
        <option value="query">query</option>
        <option value="ingridient">ingridient</option>
      </select>
    </div>
  );
};
