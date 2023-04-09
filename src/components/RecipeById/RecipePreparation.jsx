import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import placeholder from 'images/dishes_placeholder.jpg';

export const RecipePreparation = () => {
  const recipes = useSelector(selectRecipes);
  const { preview, instructions } = recipes;

  const steps = instructions.split('\r\n');
  // const filteredSteps = steps.filter(step => step !== '');

  return (
    <>
      <div className="container">
        <div className="xl:flex justify-between mb-[100px] xl:mb-[200px] xl:gap-[50px]">
          <div className="xl:w-[757px]">
            <h2 className="text-customBase text-secondaryText font-semibold mb-[28px] md:mb-8">
              Recipe Preparation
            </h2>
            <ul className="flex flex-col gap-y-3.5 md:gap-[18px] mb-[50px] text-xs md:text-customXs md:leading-[18px] text-[#000000]">
              {steps.map((step, index) => {
                if (step !== '')
                  return (
                    <li key={index} className="flex ">
                      <div className="flex justify-center items-center rounded-full w-5 h-5 mr-3.5 px-2.5 bg-accentMain text-customShoppingList font-semibold text-white">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </li>
                  );
                return '';
              })}
            </ul>
          </div>
          <div className="max-w-[343px] md:max-w-[433px] xl:w-[433px] h-[250px] md:h-[332px] overflow-hidden">
            {{ preview } ? (
              <img
                src={preview}
                className="block w-full rounded mr-auto"
                alt="ingredient_photo"
              />
            ) : (
              <img
                className="block  bg-cover bg-center w-full rounded mr-auto"
                src={placeholder}
                alt="placeholder"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
