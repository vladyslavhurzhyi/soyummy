import { useState } from 'react';
import measureList from '../../data/measure.json';

export const IngredientField = () => {
  const [ingredient, setIngredient] = useState('');
  const [amount, setAmount] = useState('1');
  const [measure, setMeasure] = useState('');

  return (
    <div className="flex mb-4 md:mb-6">
      <input
        type="text"
        name="ingledient"
        placeholder="enter ingredient"
        // autoComplete="on"
        className="pt-3 pb-2 pl-2 block w-48 md:w-96 lg:w-[600px] px-0 mr-3.5 md:mr-8 bg-accentGray  rounded-lg border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-transparent"
        value={ingredient}
        onChange={e => setIngredient(e.target.value)}
      />
      <div className="relative z-0 w-14 mr-1 md:mr-2">
        <input
          type="number"
          name="amount"
          placeholder=" "
          step="0.5"
          min="0.5"
          autoComplete="off"
          required
          className="pt-3 pb-2 pl-5 block w-full px-0  bg-accentGray rounded-lg border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-transparent"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <label
          htmlFor="amount"
          className="absolute duration-300 top-2 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm"
        >
          amount
        </label>
        {/* <span className="text-sm text-red-600 hidden" id="error">Title is required</span> */}
      </div>
      <div className="relative z-0 w-20 ">
        <select
          name="measure"
          value={measure}
          onChange={e => setMeasure(e.target.value)}
          className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent"
        >
          {measureList.map(({ type }) => (
            <option key={type} value={type} className="bg-lime-50 ">
              {type}
            </option>
          ))}
        </select>
        <label
          htmlFor="measure"
          className="absolute duration-300 top-2 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm"
        >
          measure
        </label>
        {/* <span className="text-sm text-red-600 hidden" id="error">
      Category has to be selected
    </span> */}
      </div>
      {/* <button
        className="ml-3"
        type="button"
        onClick={() => {
          console.log(`delete ingredient`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-transparent hover:fill-accentGray focus:fill-accentGray hover:stroke-accentMain focus:stroke-accentMain stroke-secondaryText w-12 h-12 stroke-1"
        >
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
          <line x1="18" y1="9" x2="12" y2="15"></line>
          <line x1="12" y1="9" x2="18" y2="15"></line>
        </svg>
      </button>
      <button
        className="ml-3"
        type="button"
        onClick={() => {
          console.log(`click remove`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 stroke-[1.5px] fill-transparent hover:stroke-accentMain focus:stroke-accentMain stroke-secondaryText"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
    </div>
  );
};
