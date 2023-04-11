import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipeForm } from 'components/AddRecipe/AddRecipeForm';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { fetchPopular } from 'redux/recipes/recipesOperations';
import { selectNewRecipe } from 'redux/recipes/recipesSelectors';

const AddRecipe = () => {
  const popular = useSelector(selectNewRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  return (
    <div className="container mb-16 md:mb-24 xl:mb-52 relative z-10">
      <MainPageTitle
        pageTitle="Add recipe"
        className="main-title mb-[72px] md:mb-[100px]"
      />
      <AddRecipeForm />
      {popular.length > 0 ? <PopularRecipes data={popular} /> : <></>}
    </div>
  );
};

export default AddRecipe;
