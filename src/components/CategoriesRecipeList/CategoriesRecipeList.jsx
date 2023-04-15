import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCategory } from 'redux/categories/categoriesSelectors';
import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import { motion } from 'framer-motion';

const CategoriesRecipesList = () => {
  const category = useSelector(selectCurrentCategory);
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(fetchRecipesByCategory(category));
  }, [category, dispatch]);
  return (
    <div>
      <ul className="flex flex-col md:flex-row md:gap-8 xl:gap-4 flex-wrap gap-6 mb-28">
        {recipes.map(({ thumb, _id, title }) => {
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
              className="w-[100%] h-[343px] md:h-[336px] xl:h-[300px] rounded-lg relative md:w-[calc(50%-16px)] xl:w-[calc(25%-12px)] object-cover shadow hover:shadow-lg focus:shadow-lg  shadow-black hover:shadow-black focus:shadow-black  dark:shadow-white dark:hover:shadow-white dark:focus:shadow-white"
            >
              <NavLink
                to={`/recipes/${_id}`}
                className="bg-gray-200  rounded-lg bg-cover bg-center w-full h-full bg-no-repeat block"
                style={{ backgroundImage: `url('${thumb}` }}
              >
                <div className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-0 right-0 mx-auto rounded-lg w-[calc(100%-18px)] xl:w-[calc(100%-16px)] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark shadow shadow-black dark:shadow-white">
                  {title}
                </div>
              </NavLink>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesRecipesList;
