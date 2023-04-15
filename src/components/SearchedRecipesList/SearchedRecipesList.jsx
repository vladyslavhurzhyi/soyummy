import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectSearchedRecipes } from 'redux/search/selectors';
import { selectIsLoading } from 'redux/search/selectors';
import { selectError } from 'redux/search/selectors';
import RecipeCard from 'components/RecipeCard';

import placeholder from '../../images/placeholder.webp';

import { motion } from 'framer-motion';

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
        <div className="flex flex-col gap-[32px] items-center mt-[50px] mb-[200px] w-[350]">
          <img src={placeholder} loading="lazy" alt="vegetables assortment" />
          <p className="text-center Poppins text-customBase dark:text-white">
            Try looking for something else..
          </p>
        </div>
      ) : (
        <div>
          <ul className="flex flex-col md:flex-row md:gap-8 lg:gap-4 flex-wrap gap-6 mb-28">
            {recipes.map(({ _id, title, description, thumb, time }) => {
              return (
                <motion.li
                  initial={{
                    y: -20,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
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
                </motion.li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
