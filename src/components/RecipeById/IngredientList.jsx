import { useDispatch, useSelector } from 'react-redux';
import { selectRecipeById } from 'redux/recipes/recipesSelectors';
import placeholder from 'images/ingred_placeholder.jpg';
import {
  addShoppingList,
  deleteShoppingListItem,
} from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingListIsError } from 'redux/shoppingList/shoppingListSelector';

export const IngredientList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipeById);
  const error = useSelector(selectShoppingListIsError);

  const { _id: recipeId, ingredients } = recipes;

  const handleChange = event => {
    const id = event.target.dataset.ingrid;
    const amount = event.target.dataset.ingramount;
    const measure = event.target.dataset.ingrmeasure;
    const thb = event.target.dataset.thb;
    const ttl = event.target.dataset.ttl;
    const ingredient = { recipeId, id, amount, measure, thb, ttl };

    if (event.target.checked) {
      dispatch(addShoppingList(ingredient));
    } else {
      dispatch(deleteShoppingListItem({ id, recipeId: recipeId.split() }));
    }
  };

  return (
    <ul className="flex flex-col mb-[50px] md:mb-24 gap-4">
      {ingredients.map(({ _id, thb, ttl, amount, measure }) => (
        <li
          key={_id}
          className="flex justify-between items-center bg-accentLighter dark:bg-accentHalfDark pl-[14px] md:pl-6 pr-[29px] md:pr-[58px] rounded-lg"
        >
          <div className="flex items-center gap-6 xl:gap-10 w-40 md:w-80 min-[1024px]:w-500px xl:w-[600px] overflow-hidden">
            {{ thb } ? (
              <img
                src={thb}
                className="w-14 md:w-28 xl:w-32 h-14 md:h-28 xl:h-32"
                alt="ingredient_photo"
              />
            ) : (
              <img
                className="w-14 md:w-28 xl:w-32 h-14 md:h-28 xl:h-32 rounded-[3px]"
                src={placeholder}
                alt="placeholder"
              />
            )}
            <p className="text-customShoppingList dark:text-whiteText md:text-customBase font-medium text-secondaryText">
              {ttl}
            </p>
          </div>
          <div className="flex items-center gap-[28px] md:gap-[78px] xl:gap-[151px]">
            <div className="flex flex-wrap justify-center h-auto bg-accentMain rounded font-semibold text-whiteText text-customRecipesTime md:text-lg my-[31px] md:my-[71px] xl:my-[73px] gap-1 px-1 max-w-[92px] md:max-w-[175px]">
              {amount && measure && (
                <p className="text-center  min-w-[60px] md:min-w-20 max-w-fit">
                  {amount} {measure}
                </p>
              )}
            </div>
            <div className="flex relative">
              <input
                type="checkbox"
                onChange={handleChange}
                data-ingrid={_id}
                data-ingramount={amount}
                data-ingrmeasure={measure}
                data-thb={thb}
                data-ttl={ttl}
                className="appearance-none text-accentMain cursor-pointer w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded bg-transparent border-solid border-opacity-50 checked:opacity-0 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer"
              />
              {!error && (
                <div className="absolute flex justify-center items-center w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded pointer-events-none bg-transparent opacity-0 border border-solid border-opacity-50 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer-checked:opacity-100">
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 md:w-5 h-2.5 md:h-5"
                  >
                    <path
                      d="M7.77377 1.01229C8.04472 0.612637 8.58836 0.508303 8.98801 0.779256C9.38767 1.05021 9.492 1.59384 9.22105 1.9935L4.47925 8.98765C4.13243 9.4992 3.37879 9.4992 3.03197 8.98765L0.779622 5.66544C0.508669 5.26578 0.613003 4.72215 1.01266 4.45119C1.41231 4.18024 1.95595 4.28457 2.2269 4.68423L3.75561 6.93907L7.77377 1.01229Z"
                      fill="#8BAA36"
                    />
                  </svg>
                </div>
              )}
              {error && (
                <div className="absolute flex justify-center items-center w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded pointer-events-none bg-transparent opacity-0 border border-solid border-opacity-50 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer-checked:opacity-100"></div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
