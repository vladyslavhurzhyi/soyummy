// import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import logo from '../../images/trash.svg';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import measureList from '../../data/measure.json';
// import categories from '../../data/category.json';

export const ResipeIngredientsFields = ({ items, setItems, ingredients }) => {
  // console.log(ingredients);
  const handleAddClick = e => {
    e.preventDefault();
    const _items = [...items];
    _items.push({
      id: '',
      amount: '0',
      measure: 'pcs',
    });
    setItems(_items);
  };

  const handleRemoveClick = id => {
    const _items = items.filter(item => item.id !== id);
    setItems([..._items]);
  };

  const handleFieldChange = (event, id) => {
    const _items = [...items];
    const index = _items.findIndex(item => item.id === id);
    const {
      value,
      dataset: { name },
    } = event.target;
    _items[index][name] = value;
    setItems(_items);
  };
  return (
    <div className="my-11 md:my-24">
      <h2 className="mb-6 md:mb-9 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText">
        Ingredients
      </h2>
      {items.map(item => {
        return (
          <div key={item.id} className="flex mb-4 md:mb-6">
            <select
              name="name"
              data-name="id"
              value={item.id}
              onChange={e => handleFieldChange(e, item.id)}
              className="pt-2 pb-1 md:pt-3 md:pb-2 pl-2 md:pl-4 block w-48 md:w-96 lg:w-[600px] px-0 mr-3.5 md:mr-8 text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"
            >
              {ingredients.map(({ ttl, _id }) => (
                <option
                  key={_id}
                  value={_id}
                  className="bg-lime-50 dark:bg-accentMain"
                >
                  {ttl}
                </option>
              ))}
            </select>
            <div className="relative z-0 w-14 mr-1 md:mr-2">
              <input
                type="number"
                name="amount"
                data-name="amount"
                placeholder=" "
                step="0.5"
                min="0.5"
                required
                className="pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 text-sm md:text-base bg-accentGray rounded-lg border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"
                value={item.amount}
                onChange={e => handleFieldChange(e, item.id)}
              />
              <label
                htmlFor="amount"
                className="absolute duration-300 top-2 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-gray-500"
              >
                amount
              </label>
              {/* <span className="text-sm text-red-600 hidden" id="error">Title is required</span> */}
            </div>
            <div className="relative z-0 w-20 ">
              <select
                name="measure"
                data-name="measure"
                value={item.measure}
                onChange={e => handleFieldChange(e, item.id)}
                className="pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 mt-0 text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"
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
              {/* <span className="text-sm text-red-600 hidden" id="error">
      Category has to be selected
    </span> */}
            </div>
            {items.length > 1 && (
              <button
                className="flex ml-1 md:ml-3 lg:ml-5 "
                onClick={() => handleRemoveClick(item.id)}
              >
                <Logo
                  newLogo={logo}
                  cssClassIcon="iconTrash"
                  cssClassDiv="divIconTrash"
                />
              </button>
              // <button
              //   className="ml-3"
              //   type="button"
              //   onClick={() => handleRemoveClick(item.id)}
              // >
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     viewBox="0 0 24 24"
              //     stroke="currentColor"
              //     className="w-8 h-8 stroke-[1.5px] fill-transparent hover:stroke-accentMain focus:stroke-accentMain stroke-secondaryText"
              //   >
              //     <path
              //       strokeLinecap="round"
              //       strokeLinejoin="round"
              //       d="M6 18L18 6M6 6l12 12"
              //     />
              //   </svg>
              // </button>
            )}
          </div>
        );
      })}

      <CurveBtn
        text="add ingredient"
        cssClass="othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring"
        onClick={handleAddClick}
      />
    </div>
  );
};
