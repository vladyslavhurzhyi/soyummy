import { NavLink } from 'react-router-dom';
export const ChooseYourBreakfast = () => {
  return (
    <div className="hidden  w-[298px] h-28 bg-white rounded-lg p-2 leading-5 text-secondaryText mb-8 md:mb-0 md:flex justify-between flex-col">
      <p className="font-main font-medium text-sm tracking-tight">
        <span className="text-accentMain">Delicious and healthy </span>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </p>
      <NavLink
        to="/categories/breakfast"
        className="text-[10px] tracking-[0.2px] flex justify-end items-center hover:text-accentMain"
      >
        See recipes{' '}
        <svg
          class="w-4 h-3 ml-1 flex"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-current"
            d="M1.5 6H13.5M13.5 6L9 1.5M13.5 6L9 10.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
    </div>
  );
};
