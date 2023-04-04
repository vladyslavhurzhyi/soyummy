import React from 'react';
import { NavLink } from "react-router-dom";

import { ReactComponent as Glass } from './images/search-icon.svg'

export const Navigation = () => {
  return (
    <nav className="navigation ml-60">
      <ul className="flex justify-center ">
        <li>
          <NavLink to="/categories" activeClassName="active" className="px-8">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active" className="px-8">
            Add Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" activeClassName="active" className="px-8">
            My Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" activeClassName="active" className="px-6">
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/shopping-list" activeClassName="active" className="px-8">
            Shopping List
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active" >
            <Glass className="stroke-black w-5 h-5 "></Glass>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
