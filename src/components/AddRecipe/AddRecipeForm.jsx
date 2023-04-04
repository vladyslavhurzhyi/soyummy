import { ResipeDescriptionFields } from './ResipeDescriptionFields';
import { ResipeIngredientsFields } from './RecipeIngredientsFields';
import { ResipeMethodFields } from './RecipeMethodFields';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const AddRecipeForm = () => {
  return (
    <div className="px-4 md:px-8 xl:px-24">
      <ResipeDescriptionFields />
      <ResipeIngredientsFields />
      <ResipeMethodFields />
      <CurveBtn
        text="Add"
        cssClass="addblack-btn"
        onClick={() => {
          console.log(`Click add recipe`);
        }}
      />
    </div>
  );
};
