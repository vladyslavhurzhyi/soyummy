import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setCurrentCategory } from 'redux/categories/categoriesOperations';

import { getCategories } from 'redux/categories/categoriesOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';
const activeLink =
  ' text-accentMain after:absolute  after:h-0.5  after:bg-accentMain after:w-full after:bottom-px after:right-0';
const CategoriesList = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <nav className=" w-full ">
      <ul className="flex relative after:absolute after:h-px after:w-full after:bottom-0 after:left-0 after:bg-listUnderline scrollbar-none overflow-x-auto mb-8 ">
        {categories.map(category => {
          return (
            <li className="mr-14 relative pb-7 " key={category._id}>
              <NavLink
                onClick={() => {
                  dispatch(setCurrentCategory(category.category));
                }}
                to={`/categories/${category.category}`}
                className={({ isActive }) =>
                  isActive ? activeLink : 'text-greyInput'
                }
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
