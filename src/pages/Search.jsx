import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import {
  getRecipesByQuery,
  getRecipesByIngredient,
} from 'redux/search/searchOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryType, selectQuery } from 'redux/search/selectors';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { Helmet } from 'react-helmet-async';

const Search = () => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);

  const dispatch = useDispatch();
  console.log(queryType);

  useEffect(() => {
    if (!query) {
      return;
    }
    switch (queryType) {
      case 'title':
        dispatch(getRecipesByQuery(query));
        console.log(query);
        console.log(queryType);
        break;
      case 'ingredients':
        dispatch(getRecipesByIngredient(query));
        console.log(query);
        console.log(queryType);
        break;
      default:
        return;
    }
  }, [dispatch, query, queryType]);

  return (
    <main>
      <div className="container">
        <Helmet>
          <title>Search</title>
        </Helmet>
        <MainPageTitle pageTitle="Search" className="main-title mb-[50px]" />
        <Searchbar />
        <SearchedRecipesList />
      </div>
    </main>
  );
};

export default Search;
