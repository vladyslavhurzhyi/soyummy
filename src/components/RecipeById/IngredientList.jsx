import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/recipesSelectors';
import placeholder from 'images/заглушка.jpg';

export const IngredientList = () => {
  const recipes = useSelector(selectRecipes);
  const { _id: recipeId, ingredients } = recipes.data[0];

  const handleChange = event => {
    console.log(event.target.checked);

    const id = event.target.dataset.ingrid;
    const amount = event.target.dataset.ingramount;
    const measure = event.target.dataset.ingrmeasure;
    const data = { recipeId, id, amount, measure };
    console.log(data);
  };

  return (
    <ul className="mb-[50px]">
      {ingredients.map(({ _id, thb, ttl, amount, measure }) => (
        <li
          name={_id}
          key={_id}
          className="flex justify-between items-center bg-accentLighter pl-[18px] pr-[29px] rounded-lg mb-4"
        >
          <div className="flex items-center gap-2">
            {{ thb } ? (
              <img src={thb} className="w-14 h-14" alt="ingredient_photo" />
            ) : (
              <img
                className="w-14 h-14 rounded-[3px]"
                src={placeholder}
                alt="placeholder"
              />
            )}
            <p className="text-customShoppingList font-medium text-secondaryText">
              {ttl}
            </p>
          </div>
          <div className="flex items-center gap-[28px]">
            <div className="flex justify-between items-center h-6 bg-accentMain rounded font-semibold text-whiteText text-customRecipesTime my-[31px] gap-1 px-1 min-w-max">
              {amount && <p className="">{amount}</p>}
              {measure && <p className="">{measure}</p>}
            </div>
            <div className="flex relative">
              <input
                type="checkbox"
                onChange={handleChange}
                data-ingrid={_id}
                data-ingramount={amount}
                data-ingrmeasure={measure}
                className="appearance-none text-accentMain cursor-pointer w-[18px] h-[18px] rounded bg-transparent border-solid border-opacity-50 checked:opacity-0 border-[#7E7E7E] transition-all duration-300 peer"
              />
              <div className="absolute flex justify-center items-center w-[18px] h-[18px] rounded pointer-events-none bg-transparent opacity-0 border border-solid border-opacity-50 border-[#7E7E7E] transition-all duration-300 peer-checked:opacity-100">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77377 1.01229C8.04472 0.612637 8.58836 0.508303 8.98801 0.779256C9.38767 1.05021 9.492 1.59384 9.22105 1.9935L4.47925 8.98765C4.13243 9.4992 3.37879 9.4992 3.03197 8.98765L0.779622 5.66544C0.508669 5.26578 0.613003 4.72215 1.01266 4.45119C1.41231 4.18024 1.95595 4.28457 2.2269 4.68423L3.75561 6.93907L7.77377 1.01229Z"
                    fill="#8BAA36"
                  />
                </svg>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
