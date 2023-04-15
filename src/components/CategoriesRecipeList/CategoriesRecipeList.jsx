import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCategory } from 'redux/categories/categoriesSelectors';
import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import RecipeCard from 'components/RecipeCard';

const CategoriesRecipesList = () => {
  const category = useSelector(selectCurrentCategory);
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  useEffect(() => {
    dispatch(fetchRecipesByCategory(category));
  }, [category, dispatch]);
  return (
    <div>
      <ul className="flex flex-col md:flex-row md:gap-8 lg:gap-4 flex-wrap gap-6 mb-28">
        {recipes.map(({ _id, title, description, thumb, time }) => {
          return (
            <li
              key={_id}
              className="mx-auto md:mx-0 max-w-sm md:max-w-none md:w-[calc(50%-16px)] lg:w-[calc(25%-12px)]"
            >
              <RecipeCard
                id={_id}
                title={title}
                text={description}
                thumb={thumb}
                time={time}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesRecipesList;
