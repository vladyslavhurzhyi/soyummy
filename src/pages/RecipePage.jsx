import { RecipePageHero } from 'components/Recipe/RecipePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeById } from 'redux/recipes/recipesOperations';
import {
  selectRecipes,
  // selectIsLoading,
  // selectError,
} from 'redux/recipes/recipesSelectors';

const RecipePage = () => {
  const recipes = useSelector(selectRecipes);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  const data = process.env.SO_YUMMY_URL_BACK;
  console.log(data);

  useEffect(() => {
    dispatch(fetchRecipeById());
  }, [dispatch]);

  return (
    <main>
      <RecipePageHero data={recipes} />
    </main>
  );
};

export default RecipePage;
