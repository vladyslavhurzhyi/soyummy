import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/recipesSelectors';

export const IngredientList = data => {
  const recipes = useSelector(selectRecipes);
  const { ingredients } = recipes.data[0];
  console.log(ingredients);

  return (
    <>
      <div className="container">
        <div className="flex justify-between placeholder:w-full">
          <div>Ingredients</div>
          <div className="flex">
            <div className="w-16">Number</div>
            <div className="w-16">Add to list</div>
          </div>
        </div>
      </div>
    </>
  );
};
