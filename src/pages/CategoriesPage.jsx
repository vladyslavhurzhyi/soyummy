// import { useEffect } from 'react';
// import { getCategoriesList } from 'service/Api/authUserAPI';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesRecipesList from 'components/CategoriesRecipeList/CategoriesRecipeList';

const CategoriesPage = () => {
  return (
    <div className="mx-auto">
      <h1>Categories</h1>
      <CategoriesList />
      <CategoriesRecipesList />
    </div>
  );
};

export default CategoriesPage;
