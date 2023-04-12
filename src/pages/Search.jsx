import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  getRecipesByQuery,
  getRecipesByIngredient,
} from 'redux/search/searchOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryType } from 'redux/search/selectors';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryType = useSelector(selectQueryType);
  const dispatch = useDispatch();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    switch (queryType) {
      case 'title':
        dispatch(getRecipesByQuery(query));
        break;
      case 'ingredients':
        dispatch(getRecipesByIngredient(query));
        break;
      default:
        return;
    }
  }, [dispatch, query, queryType]);

  return (
    <main>
      <MainPageTitle
        pageTitle={'Search'}
        className={'main-title pb-[50px] md:pb-[72px] px-4 md:px-8 xl:px-24'}
      />
      <Searchbar />
      <SearchedRecipesList />
    </main>
  );
};

export default Search;
