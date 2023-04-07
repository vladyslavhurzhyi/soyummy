import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/recipesSelectors';

export const IngredientList = data => {
  const recipes = useSelector(selectRecipes);
  const { ingredients } = recipes.data[0];
  console.log(ingredients);

  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center text-center w-full h-[42px] bg-accentMain rounded-lg font-semibold text-whiteText px-3.5 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="text-customRecipesTime">Ingredients</div>
          <div className="flex">
            <div className="text-customRecipesTime mr-[18px]">Number</div>
            <div className="text-customRecipesTime">Add to list</div>
          </div>
        </div>
      </div>
    </>
  );
};
