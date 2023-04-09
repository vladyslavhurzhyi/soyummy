import { IngredientList } from './IngredientList';

export const RecipeIngredientsList = data => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center text-center w-full h-[42px] md:h-[60px] bg-accentMain rounded-lg text-customRecipesTime md:text-lg font-semibold text-whiteText px-3.5 md:px-8 mb-6 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <p>Ingredients</p>
          <div className="flex">
            <p className="mr-[18px] md:mr-[38px]">Number</p>
            <p>Add to list</p>
          </div>
        </div>
        <IngredientList />
      </div>
    </>
  );
};
