import { useEffect } from 'react';

import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesRecipesList from 'components/CategoriesRecipeList/CategoriesRecipeList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/categories/');
  }, [navigate]);

  return (
    <div className="mx-auto">
      <MainPageTitle
        pageTitle={'Categories'}
        className={'font-semibold font text-5xl mb-28'}
      />
      <CategoriesList />
      <CategoriesRecipesList />
    </div>
  );
};

export default CategoriesPage;
