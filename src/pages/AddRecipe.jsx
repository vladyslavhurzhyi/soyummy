import { AddRecipeForm } from 'components/AddRecipe/AddRecipeForm';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

const AddRecipe = () => {
  return (
    <div className="container">
      <MainPageTitle
        pageTitle="Add recipe"
        className="main-title mb-[72px] md:mb-[100px]"
      />
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipe;
