import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipeForm } from 'components/AddRecipe/AddRecipeForm';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { fetchPopular } from 'redux/recipes/recipesOperations';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import { Helmet } from 'react-helmet-async';
import { scrollToTop } from 'utils/scrollToTop';

const AddRecipe = () => {
  const popular = useSelector(selectRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
    scrollToTop();
  }, [dispatch]);

  return (
    <div className="container  relative z-10">
      <Helmet>
        <title>Add new recipe</title>
      </Helmet>
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
