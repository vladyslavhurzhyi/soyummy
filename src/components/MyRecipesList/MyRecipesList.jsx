import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import { RecipesList } from 'components/RecipesList/RecipesList';
import {
  getMyRecipes,
  removeMyRecipes,
} from 'redux/myRecipes/myRecipesOperations';
import {
  selectMyError,
  selectMyIsLoading,
  selectMyRecipes,
  // selectMyFetching,
} from 'redux/myRecipes/myRecipesSelectors';
import { toast } from 'react-toastify';

export const MyRecipesList = ({ cssClass }) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const { current_page, total, data, per_page } = useSelector(selectMyRecipes);
  const error = useSelector(selectMyError);
  const isLoading = useSelector(selectMyIsLoading);
  // const isFetching = useSelector(selectMyFetching);
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
      {error &&
        toast.error('Something went wrong, please try again later', {
          autoClose: 3000,
        })}
      {data?.length > 0 && (
        <>
          <RecipesList
            isLoading={isLoading}
            removeRecipe={removeMyRecipes}
            cssClass={cssClass}
            data={data}
          />
          {total > 0 && (
            <RecipesListPaginator
              current_page={current_page}
              total={total}
              per_page={per_page}
              handlePaginationClick={handlePaginationClick}
              pageIncrement={pageIncrement}
              pageDecrement={pageDecrement}
              isLoading={isLoading}
            />
          )}
        </>
      )}
    </>
  );
};
