import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Searchbar } from 'components/Searchbar/Searchbar';

export const Search = () => {
  return (
    <main>
      <MainPageTitle
        pageTitle="Search"
        className="main-title ml-4 mt-20 mb-20"
      />
      <Searchbar />
    </main>
  );
};
