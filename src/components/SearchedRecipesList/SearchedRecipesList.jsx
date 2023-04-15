import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectSearchedRecipes } from 'redux/search/selectors';
import { selectIsLoading } from 'redux/search/selectors';
import { selectError } from 'redux/search/selectors';
import RecipeCard from 'components/RecipeCard';

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectSearchedRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error &&
        toast.error('Something went wrong, please try again later', {
          autoClose: 3000,
        })}
      {isLoading && !error && <Loader />}
      {recipes.length === 0 ? (
        <p className="text-center">Try to look for something else</p>
      ) : (
        <div>
          <ul className="flex flex-col md:flex-row md:gap-8 lg:gap-4 flex-wrap gap-6 mb-28">
            {recipes.map(({ _id, title, description, thumb, time }) => {
              return (
                <li
                  key={_id}
                  className="mx-auto md:mx-0 max-w-sm md:max-w-none md:w-[calc(50%-16px)] lg:w-[calc(25%-12px)]"
                >
                  <RecipeCard
                    id={_id}
                    title={title}
                    text={description}
                    thumb={thumb}
                    time={time}
                  />
                  {/* <NavLink
                    to={`/recipes/${_id}`}
                    className="bg-gray-200  rounded-lg bg-cover bg-center w-full h-full bg-no-repeat block"
                    style={{ backgroundImage: `url('${thumb}` }}
                  >
                    <div className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-0 right-0 mx-auto rounded-lg w-[calc(100%-18px)] xl:w-[calc(100%-16px)] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark shadow shadow-black dark:shadow-white">
                      {title}
                    </div>
                  </NavLink> */}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
