//TODO use when API is ready
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setCurrentCategory } from 'redux/categories/categoriesOperations';
// import { setCurrentCategory } from 'redux/categories/categoriesSlice';
// import { getCategoriesList } from 'service/Api/getRecipesApi';
import { getCategories } from 'redux/categories/categoriesOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';

const CategoriesList = () => {
  // const [categories, setCategories] = useState([]);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  // useEffect(() => {
  //   getCategoriesList()
  //     .then(data => {
  //       setCategories(data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <nav className="w-full ">
      <ul className="flex  pb-7   after: ">
        {categories.map(category => {
          return (
            <li className="mr-14" key={category._id}>
              <NavLink
                onClick={() => {
                  dispatch(setCurrentCategory(category.category));
                }}
                to={`/categories/${category.category}`}
                className="text-#84cc16 font-medium hover:text-gray-400"
                activeClassName="text-gray-400"
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
