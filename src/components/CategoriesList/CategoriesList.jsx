//TODO use when API is ready
import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { getCategoriesList } from 'service/Api/getRecipesApi';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesList()
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <nav className="w-full ">
      <ul className="flex  pb-7   after: ">
        {categories.map(category => {
          return (
            <li className="mr-14" key={category._id}>
              <NavLink
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
