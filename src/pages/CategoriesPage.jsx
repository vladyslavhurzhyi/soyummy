import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesRecipesList from 'components/CategoriesRecipeList/CategoriesRecipeList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentCategory } from 'redux/categories/categoriesSelectors';

const CategoriesPage = () => {
  const navigate = useNavigate();

  const currCategory = useSelector(selectCurrentCategory);

  useEffect(() => {
    navigate(`/categories/${currCategory}`);
  }, [navigate, currCategory]);

  return (
    <div className="container">
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <MainPageTitle
        pageTitle={'Categories'}
        className={'main-title pb-[50px] md:pb-[72px] '}
      />
      <CategoriesList />
      <CategoriesRecipesList />
    </div>
  );
};

export default CategoriesPage;
