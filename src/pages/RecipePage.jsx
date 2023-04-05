import { RecipePageHero } from 'components/Recipe/RecipePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from 'redux/recipes/recipesOperations';
import {
  selectRecipes,
  // selectIsLoading,
  // selectError,
} from 'redux/recipes/recipesSelectors';

const RecipePage = () => {
  const recipes = useSelector(selectRecipes);
  console.log(recipes);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  const id = useParams();

  useEffect(() => {
    dispatch(fetchRecipeById(id.recipeId));
  }, [dispatch, id.recipeId]);

  return (
    <main>
      <RecipePageHero data={recipes} />
    </main>
  );
};

export default RecipePage;
