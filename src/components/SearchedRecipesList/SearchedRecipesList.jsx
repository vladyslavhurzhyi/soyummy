import { RecipesList } from 'components/RecipesList/RecipesList';
import { useSelector } from 'react-redux';
//import { selectError } from 'redux/recipes/recipesSelectors';
import { selectSearchedRecipes } from 'redux/search/selectors';
//import { selectIsLoading } from 'redux/recipes/recipesSelectors';

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectSearchedRecipes);
  console.log(recipes);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return <>{recipes.length > 0 && <RecipesList data={recipes} />}</>;
};
