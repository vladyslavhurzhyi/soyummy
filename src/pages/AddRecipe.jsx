import { AddRecipeForm } from 'components/AddRecipe/AddRecipeForm';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
// import { FollowUs } from 'components/FollowUs/FollowUs';
const AddRecipe = () => {
  return (
    <div>
      <MainPageTitle
        pageTitle="Add recipe"
        // className="main-title mt-[50px] mb-[72px] md:mt-[72px] md:mb-[100px] xl:mt-[100px] px-4 md:px-8 xl:px-24"
        className="main-title mb-[72px] md:mb-[100px] px-4 md:px-8 xl:px-24"
      />
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipe;
