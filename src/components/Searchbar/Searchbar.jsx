import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

const { SearchForm } = require('components/SearchForm/SearchForm');

export const Searchbar = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <SearchForm />
      <SearchTypeSelector />
    </div>
  );
};
