import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCategory } from 'redux/categories/categoriesSelectors';
import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';
import { selectRecipes } from 'redux/recipes/recipesSelectors';

const CategoriesRecipesList = () => {
  const category = useSelector(selectCurrentCategory);
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  useEffect(() => {
    dispatch(fetchRecipesByCategory(category));
  }, [category, dispatch]);
  return (
    <div>
      <ul className="container flex flex-col md:flex-row md:gap-8 xl:gap-4 flex-wrap gap-6 mb-28">
        {recipes.map(({ thumb, _id, title }) => {
          return (
            <li
              key={_id}
              className="w-[343px] h-[323px] relative md:w-[47%] xl:w-[24%] object-cover"
            >
              <NavLink
                to={`/recipe/${_id}`}
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
  );
};

export default CategoriesRecipesList;
