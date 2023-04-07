import { IngredientList } from './IngredientList';

export const Ingredients = data => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center text-center w-full h-[42px] bg-accentMain rounded-lg font-semibold text-whiteText px-3.5 mb-6 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <p className="text-customRecipesTime">Ingredients</p>
          <div className="flex">
            <p className="text-customRecipesTime mr-[18px]">Number</p>
            <p className="text-customRecipesTime">Add to list</p>
          </div>
        </div>
        <IngredientList />
      </div>
    </>
  );
};
