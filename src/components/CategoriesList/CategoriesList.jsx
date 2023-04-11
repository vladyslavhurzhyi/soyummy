import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setCurrentCategory } from 'redux/categories/categoriesOperations';

import { getCategories } from 'redux/categories/categoriesOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';

const CategoriesList = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <nav className="container w-full ">
      <ul className="flex  pb-7  overflow-x-auto mb-8 ">
        {categories.map(category => {
          return (
            <li className="mr-14 after:content-none " key={category._id}>
              <NavLink
                onClick={() => {
                  dispatch(setCurrentCategory(category.category));
                }}
                to={`/categories/${category.category}`}
                className=" font-medium text-greyInput hover:text-accentMain"
                activeClassName="text-white-500 font-bold"
              >
                {category.category}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoriesList;
