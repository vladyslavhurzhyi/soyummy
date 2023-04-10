import { RecipesList } from 'components/RecipesList/RecipesList';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/recipes/recipesSelectors';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import { selectIsLoading } from 'redux/recipes/recipesSelectors';

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return <>{recipes.length > 0 && <RecipesList recipes={recipes} />}</>;
};
