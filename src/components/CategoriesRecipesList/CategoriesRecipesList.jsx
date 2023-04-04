//TODO when API is ready
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllRecipes } from 'service/Api/getRecipesAPI';

const CategoriesRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  //TODO when API is ready
  // const { category } = useParams();
  useEffect(() => {
    getAllRecipes().then(({ data }) => setRecipes(data));
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap w-full h-full gap-y-24">
        {recipes.map(({ thumb, _id, title }) => {
          return (
            <li key={_id} className="w-1/4 h-80">
              <div
                className="bg-gray-200 bg-cover bg-center w-full h-full bg-no-repeat relative "
                style={{ backgroundImage: `url('${thumb}` }}
              >
                <div className="flex items-center justify-center absolute bottom-6 right-4 w-64 h-12 bg-slate-50 rounded-lg">
                  {title}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesRecipesList;
