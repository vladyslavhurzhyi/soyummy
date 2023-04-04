import { IngredientField } from './IngredientField.jsx';

import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const ResipeIngredientsFields = () => {
  return (
    <div className="my-11 md:my-24">
      <h2 className="mb-6 md:mb-9 font-main font-semibold text-secondaryText text-customBase">
        Ingredients
      </h2>
      <IngredientField />
      <CurveBtn
        text="add ingredient"
        cssClass="othercateg-btn"
        onClick={() => {
          console.log(`Add one more ingr`);
        }}
      />
    </div>
  );
};
