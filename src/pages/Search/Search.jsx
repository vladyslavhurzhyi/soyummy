import { Searchbar } from 'components/Searchbar/Searchbar';

const { MainPageTitle } = require('components/MainPageTitle/MainPageTitle');

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
