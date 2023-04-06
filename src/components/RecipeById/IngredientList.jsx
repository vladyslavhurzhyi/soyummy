import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/recipesSelectors';

export const IngredientList = data => {
  const recipes = useSelector(selectRecipes);
  const { ingredients } = recipes.data[0];
  console.log(ingredients);

  return (
    <>
      <div className="container">
        <div className="flex w-full">
          <div>Ingredients</div>
          <div>Number</div>
          <div>Add to list</div>
        </div>
      </div>
    </>
  );
};
