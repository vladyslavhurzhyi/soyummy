import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <ul className="flex w-full md:w-[100px] flex-col justify-center ">
      <li className="self-center md:self-start">
        <NavLink
          to="/search"
          state={{ from: 'ingredients' }}
          className="font-medium text-whiteText hover:text-accentMain focus:text-accentMain dark:hover:text-accentDark dark:focus:text-accentDark text-[14px]/[18px]"
        >
          Ingredients
        </NavLink>
      </li>
      <li className="mt-3.5 md:mt-5 lg:mt-6 self-center md:self-start">
        <NavLink
          to="/add"
          className="font-medium text-whiteText hover:text-accentMain focus:text-accentMain dark:hover:text-accentDark dark:focus:text-accentDark text-[14px]/[18px]"
        >
          Add recipes
        </NavLink>
      </li>
      <li className="mt-3.5 md:mt-5 lg:mt-6 self-center md:self-start">
        <NavLink
          to="/my"
          className="font-medium text-whiteText hover:text-accentMain focus:text-accentMain dark:hover:text-accentDark dark:focus:text-accentDark text-[14px]/[18px]"
        >
          My recipes
        </NavLink>
      </li>
      <li className="mt-3.5 md:mt-5 lg:mt-6 self-center md:self-start">
        <NavLink
          to="favorite"
          className="font-medium text-whiteText hover:text-accentMain focus:text-accentMain dark:hover:text-accentDark dark:focus:text-accentDark text-[14px]/[18px]"
        >
          Favorite
        </NavLink>
      </li>
      <li className="mt-3.5 md:mt-5 lg:mt-6 self-center md:self-start">
        <NavLink
          to="shopping-list"
          className="font-medium text-whiteText hover:text-accentMain focus:text-accentMain dark:hover:text-accentDark dark:focus:text-accentDark text-[14px]/[18px]"
        >
          Shopping list
        </NavLink>
      </li>
    </ul>
  );
};
