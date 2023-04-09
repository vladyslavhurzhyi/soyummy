import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import { RecipesList } from 'components/RecipesList/RecipesList';
import {
  getMyRecipes,
  removeMyRecipes,
} from 'redux/myRecipes/myRecipesOperations';
import { Loader } from 'components/Loader/Loader';
import {
  selectMyError,
  selectMyIsLoading,
  selectMyRecipes,
} from 'redux/myRecipes/myRecipesSelectors';

export const MyRecipesList = ({ cssClass }) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const { current_page, data, total, per_page } = useSelector(selectMyRecipes);
  const myRecipes = data;
  const error = useSelector(selectMyError);
  const isLoading = useSelector(selectMyIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes(paginationPage));
  }, [dispatch, paginationPage]);

  const pageIncrement = () => {
    setPaginationPage(prev => prev + 1);
  };
  const pageDecrement = () => {
    setPaginationPage(prev => prev - 1);
  };

  const handlePaginationClick = event => {
    const buttonValue = Number(event.target.textContent);

    setPaginationPage(buttonValue);
  };

  return (
    <>
      {error && <div className=" bg-red-500">Error</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RecipesList
            removeRecipe={removeMyRecipes}
            cssClass={cssClass}
            data={myRecipes}
          />
          {total > 0 && (
            <RecipesListPaginator
              current_page={current_page}
              total={total}
              per_page={per_page}
              handlePaginationClick={handlePaginationClick}
              pageIncrement={pageIncrement}
              pageDecrement={pageDecrement}
            />
          )}
        </>
      )}
    </>
  );
};
