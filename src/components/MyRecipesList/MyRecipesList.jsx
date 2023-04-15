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
} from 'redux/myRecipes/myRecipesSelectors';
import { toast } from 'react-toastify';
import placeholder from '../../images/placeholder.webp';
import { scrollToTop } from 'utils/scrollToTop';

export const MyRecipesList = ({ cssClass }) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const { current_page, total, data, per_page } = useSelector(selectMyRecipes);
  const error = useSelector(selectMyError);
  const isLoading = useSelector(selectMyIsLoading);

  const dispatch = useDispatch();
  const totalPages = Math.ceil(Number(total) / Number(per_page));
  const isEmptyPage = current_page > totalPages;
  useEffect(() => {
    if (isEmptyPage) {
      setPaginationPage(totalPages);
    }
  }, [isEmptyPage, totalPages]);
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
    scrollToTop();
    setPaginationPage(buttonValue);
  };

  return (
    <>
      {error &&
        toast.error('Something went wrong, please try again later', {
          autoClose: 3000,
        })}
      {data?.length > 0 ? (
        <>
          <RecipesList
            paginationPage={paginationPage}
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
      ) : (
        <div
          className="flex flex-col items-center
         object-center text-center"
        >
          <img
            src={placeholder}
            alt="error"
            className="rounded mb-3.5 md:mb-8 pt-4 md:h-[327px] xl:h-[331px]"
          />
          <p className="text-[18px] md:text-customBase font-semibold mb-2 md:mb-3.5 dark:text-whiteText">
            We are sorry,
          </p>
          <p className="text-customXxs md:text-[18px] leading-[18px] mb-[100px] md:mb-[204px] w-48 md:w-full md:min-w-[430px] dark:text-[#FAFAFA80]">
            You don't have any added recipes ...
          </p>
        </div>
      )}
    </>
  );
};
