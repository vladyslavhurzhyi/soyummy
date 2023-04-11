import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesRecipesList from 'components/CategoriesRecipeList/CategoriesRecipeList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
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
    <div className="mx-auto">
      <MainPageTitle
        pageTitle={'Categories'}
        className={'main-title pb-[50px] md:pb-[72px] px-4 md:px-8 xl:px-24'}
      />
      <CategoriesList />
      <CategoriesRecipesList />
    </div>
  );
};

export default CategoriesPage;
