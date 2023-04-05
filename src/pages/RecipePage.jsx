import { RecipePageHero } from 'components/Recipe/RecipePageHero';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from 'redux/recipes/recipesOperations';
import // selectRecipes,
// selectIsLoading,
// selectError,
'redux/recipes/recipesSelectors';

const RecipePage = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  const id = useParams();

  useEffect(() => {
    dispatch(fetchRecipeById(id.recipeId));
  }, [dispatch, id.recipeId]);

  return (
    <main>
      <RecipePageHero />
    </main>
  );
};

export default RecipePage;
