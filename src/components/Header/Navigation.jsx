import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Glass } from './images/search-icon.svg';

export const Navigation = () => {
  return (
    <nav className="">
      <ul className="flex justify-center ">
        <li>
          <NavLink
            to="/categories/Beef"
            activeClassName="active"
            className="px-4"
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active" className="px-4">
            Add Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" activeClassName="active" className="px-4">
            My Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" activeClassName="active" className="px-4">
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shopping-list"
            activeClassName="active"
            className="px-4"
          >
            Shopping List
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeclassname="active">
            <Glass className="stroke-black w-5 h-5 "></Glass>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
