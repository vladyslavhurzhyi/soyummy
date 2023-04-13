import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectSearchedRecipes } from 'redux/search/selectors';
import { selectIsLoading } from 'redux/search/selectors';
import { selectError } from 'redux/search/selectors';

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
          <ul className="container flex flex-col md:flex-row md:gap-8 xl:gap-4 flex-wrap gap-6 xl:gap-y-24 mb-28">
            {recipes.map(({ thumb, _id, title }) => {
              return (
                <li
                  key={_id}
                  className="w-[343px] h-[323px] relative md:w-[calc(50%-16px)] xl:w-[calc(25%-12px)] object-cover"
                >
                  <NavLink
                    to={`/recipes/${_id}`}
                    className="bg-gray-200  rounded-lg bg-cover bg-center w-full h-full bg-no-repeat block"
                    style={{ backgroundImage: `url('${thumb}` }}
                  >
                    <div className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-[18px] rounded-lg w-[307px] md:w-[300px] xl:w-[268px] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark">
                      {title}
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
