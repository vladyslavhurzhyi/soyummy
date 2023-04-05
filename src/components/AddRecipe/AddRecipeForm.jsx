import { ResipeDescriptionFields } from './ResipeDescriptionFields';
import { ResipeIngredientsFields } from './RecipeIngredientsFields';
import { ResipeMethodFields } from './RecipeMethodFields';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const AddRecipeForm = () => {
  return (
    <div className="px-4 md:px-8 xl:px-24 relative">
      <ResipeDescriptionFields />
      <ResipeIngredientsFields />
      <ResipeMethodFields />
      <CurveBtn
        text="Publish recipe"
        cssClass="addblack-btn"
        onClick={() => {
          console.log(`Click add recipe`);
        }}
      />
      <div className="lg:w-40 absolute top-0 left-[900px] xl:left-[1056px]">
        <h2 className="font-main font-semibold text-secondaryText text-customBase mb-10">
          Follow Us
        </h2>
        <FollowUs className="followus-addrecipe" />
      </div>
    </div>
  );
};
