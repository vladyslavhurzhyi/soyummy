import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Glass } from './images/search-icon.svg';

export const Navigation = () => {
  return (
    <nav className="">
      <ul className="flex justify-center ">
        <li>
          <NavLink
            to="/categories"
            activeClassName="active"
            className="mr-[30px]"
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active" className="mr-[30px]">
            Add Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" activeClassName="active" className="mr-[30px]">
            My Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            activeClassName="active"
            className="mr-[30px]"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shopping-list"
            activeClassName="active"
            className="mr-[33px]"
          >
            Shopping List
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeclassname="active " className="">
            <Glass className="stroke-black w-5 h-5 "></Glass>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
