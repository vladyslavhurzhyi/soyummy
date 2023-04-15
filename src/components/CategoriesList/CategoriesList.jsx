import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCurrentCategory } from 'redux/categories/categoriesOperations';
import { getCategories } from 'redux/categories/categoriesOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
const activeLink =
  ' text-accentMain after:absolute  after:h-0.5  after:bg-accentMain after:w-full after:bottom-px after:right-0';

const CategoriesList = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const listRef = useRef(null);

  function handleClickLeft() {
    listRef.current.scrollLeft -= 300;
  }

  function handleClickRight() {
    listRef.current.scrollLeft += 300;
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <nav className=" w-full relative mb-8 border-b-2 ">
      <ul ref={listRef} className="flex scrollbar-none overflow-x-auto  ">
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
      <div className="flex justify-between  ">
        <button type="button" onClick={handleClickLeft}>
          <HiArrowSmLeft className="dark:fill-white size animate-pulse" />
        </button>
        <button type="button" onClick={handleClickRight}>
          <HiArrowSmRight className="dark:fill-white size animate-pulse" />
        </button>
      </div>
    </nav>
  );
};

export default CategoriesList;
