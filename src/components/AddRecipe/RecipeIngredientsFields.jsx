import { useState } from 'react';
import { toast } from 'react-toastify';
import { Logo } from '../Logo/Logo';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import measureList from '../../data/measure.json';

export const ResipeIngredientsFields = ({
  items,
  updateItems,
  removeItem,
  ingredients,
}) => {
  const [matchingIngr, setMatchingIngr] = useState([]);
  const [ingredientName, setIngredientName] = useState('');
  const [current, setCurrent] = useState('');
  const [currentAmount, setCurrentAmount] = useState('1');
  const [currentMeasure, setCurrentMeasure] = useState('pcs');
  const handleFieldChange = ({ target: { value, dataset } }) => {
    if (dataset.name === 'amount') {
      setCurrentAmount(value);
    }
    if (dataset.name === 'measure') {
      setCurrentMeasure(value);
    }
  };

  const onInput = ({ target: { value } }) => {
    const currentValue = value.trim();
    setIngredientName(currentValue);
    const matchIngredients = ingredients.filter(it => {
      return it.ttl?.toLowerCase().includes(currentValue.toLowerCase());
    });
    setMatchingIngr(matchIngredients);
  };

  const chooseItem = (ttl, _id) => {
    setCurrent(_id);
    setIngredientName(ttl);
    setMatchingIngr([]);
  };

  const newIngredientField = () => {
    if (ingredientName === ' ') {
      return toast.error('Choose ingredient', {
        autoClose: 3000,
      });
    }
    const newIgredient = {
      ttl: ingredientName,
      id: current,
      amount: currentAmount,
      measure: currentMeasure,
    };

    updateItems([...items, newIgredient]);

    setIngredientName(' ');
    setCurrent('');
    setCurrentAmount('1');
    setCurrentMeasure('pcs');
  };
  return (
    <div className="my-11 md:my-24">
      <h2 className="mb-6 md:mb-9 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText">
        Ingredients
      </h2>
      <div key={current} className="flex mb-4 md:mb-6">
        <div className="relative z-0 w-1/2 ">
          <input
            type="text"
            name="ingredient"
            placeholder=" "
            autoComplete="off"
            required
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
            value={ingredientName}
            onInput={onInput}
          />
          <ul className="list-none">
            {matchingIngr.length > 1 &&
              matchingIngr.map(({ ttl, _id }) => (
                <li
                  key={_id}
                  value={_id}
                  onClick={() => chooseItem(ttl, _id)}
                  className="bg-lime-50 dark:bg-accentMain"
                >
                  {ttl}
                </li>
              ))}
          </ul>
          <label
            htmlFor="ingredient"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText"
          >
            Choose ingredient
          </label>
        </div>
        <div className="relative z-0 w-14 mr-1 md:mr-2">
          <input
            type="number"
            name="amount"
            data-name="amount"
            placeholder=" "
            step="0.5"
            min="0.5"
            required
            className="pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 text-sm md:text-base bg-accentGray rounded-lg border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
            value={currentAmount}
            onChange={e => handleFieldChange(e, current)}
          />
          <label
            htmlFor="amount"
            className="absolute duration-300 top-2 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-gray-500"
          >
            amount
          </label>
        </div>
        <div className="relative z-0 w-20 ">
          <select
            name="measure"
            data-name="measure"
            value={currentMeasure}
            onChange={e => handleFieldChange(e, current)}
            className="pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 mt-0 text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
          >
            {measureList.map(({ type }) => (
              <option
                key={type}
                value={type}
                className="bg-lime-50 dark:bg-accentMain"
              >
                {type}
              </option>
            ))}
          </select>
          <label
            htmlFor="measure"
            className="absolute duration-300 top-2 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm  dark:text-gray-500"
          >
            measure
          </label>
        </div>
      </div>

      <CurveBtn
        text="add ingredient"
        cssClass="othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring mb-3 md:mb-5"
        onClick={newIngredientField}
      />
      <ul className="w-full md:w-2/3 xl:w-1/2">
        {items.length >= 1 &&
          items.map(({ ttl, id, amount, measure }) => (
            <li
              key={id}
              className="m-1 px-2 py-[2px] lg:px-4 flex items-center justify-between  bg-lime-50 rounded-lg focus:outline-none focus:ring-0 focus:border-accentMain border-transparent dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"
            >
              <div className=" p-[1px] md:p-2 font-normal md:font-medium  text-customXs md:text-customSm bg-[#EBF3D4] dark:bg-transparent dark:text-whiteText flex rounded-md ">
                <p className="mr-4">{ttl}:</p>
                <p>{amount}</p>
                <p>{measure}</p>
              </div>
              <button
                type="button"
                className="flex ml-1 md:ml-3 lg:ml-5"
                onClick={() => removeItem(id)}
              >
                <Logo
                  trash="true"
                  cssClassIcon="iconTrash"
                  cssClassDiv="divIconTrash hover:dark:stroke-accentMain focus:dark:stroke-accentMain"
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
