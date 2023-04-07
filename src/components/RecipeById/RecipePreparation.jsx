import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import placeholder from 'images/dishes_placeholder.jpg';

export const RecipePreparation = () => {
  const recipes = useSelector(selectRecipes);
  const { preview, instructions } = recipes.data[0];

  const instructionsArr = instructions.split('\r\n\r\n');

  return (
    <>
      <div className="container">
        <div className="mb-[100px]">
          <h2 className="text-customBase text-secondaryText font-semibold mb-[28px]">
            Recipe Preparation
          </h2>
          <ul className="mb-[50px] text-xs text-[#000000]">
            {instructionsArr.map((step, index) => (
              <li key={index} className="flex">
                <div className="rounded-full w-5 h-5 mr-3.5 px-2.5 bg-accentMain">
                  {index + 1}
                </div>
                <p>{step}</p>
              </li>
            ))}
          </ul>
          {{ preview } ? (
            <img
              src={preview}
              className="block  bg-cover bg-center h-[250px] rounded mr-auto"
              alt="ingredient_photo"
            />
          ) : (
            <img
              className="block  bg-cover bg-center h-[250px] rounded mr-auto"
              src={placeholder}
              alt="placeholder"
            />
          )}
        </div>
      </div>
    </>
  );
};
