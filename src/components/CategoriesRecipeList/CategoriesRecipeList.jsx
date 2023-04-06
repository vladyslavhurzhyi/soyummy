import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipesByCategory } from 'service/Api/getRecipesApi';

const CategoriesRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    getRecipesByCategory(category).then(({ data }) => setRecipes(data));
  }, [category]);

  return (
    <div>
      <ul className="flex flex-wrap w-full h-full gap-y-24">
        {recipes.map(({ thumb, _id, title }) => {
          return (
            <li key={_id} className="w-1/4 h-80">
              <NavLink
                to={`/recipe/${_id}`}
                className="bg-gray-200 bg-cover bg-center w-full h-full bg-no-repeat relative block"
                style={{ backgroundImage: `url('${thumb}` }}
              >
                <div className="flex items-center justify-center absolute bottom-6 right-4 w-64 h-12 bg-slate-50 rounded-lg">
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
