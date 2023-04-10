import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRecipesByQuery } from 'redux/search/searchOperations';
// import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryType } from 'redux/search/selectors';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { getRecipesByIngredient } from 'redux/search/searchOperations';

export const Search = () => {
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
      default: 
        dispatch(getRecipesByIngredient(query));
      

    }
  }, [dispatch, query, queryType]);

  return (
    <main>
      <MainPageTitle pageTitle="Search" className="main-title ml-10" />
      <Searchbar />
      <SearchedRecipesList />
    </main>
  );
};

// const [recipes, setRecipes] = useState(null);
// const [searchParams, setSearchParams] = useSearchParams();

// const query = searchParams.get('query'); //get from store
// const type = searchParams.get('type'); // ^

// useEffect(() => {
//   if (!query) {
//     return;
//   }
//   async function findByQuery() {
//     try {
//       const recipes = await getRecipesByQuery(query, type);
//       if (!recipes) {
//         alert('nothing was found');
//         return;
//       }
//       console.log(recipes.data);
//       setRecipes(recipes.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   findByQuery(query, type);
// }, [query, type]);

// const handleChange = newType => {
//   return newType;
// };

// const handleFormSubmit = (newQuery, type = 'title') => {
//   type = handleChange(type);
//   setSearchParams({ query: newQuery, type });
// };
