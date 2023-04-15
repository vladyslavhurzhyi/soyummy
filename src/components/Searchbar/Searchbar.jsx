import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

export const Searchbar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-[50px] relative z-10">
      <SearchForm />
      <SearchTypeSelector />
    </div>
  );
};
