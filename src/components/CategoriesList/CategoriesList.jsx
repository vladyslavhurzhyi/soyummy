import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getRecipesByCategory, getAllRecipes } from 'service/Api/getRecipesAPI';

const categoriesList = [
  {
    _id: '64284d2e5cc669661c595915',
    category: 'Beef',
  },
  {
    _id: '64284d2e5cc669661c595916',
    category: 'Breakfast',
  },
  {
    _id: '64284d2e5cc669661c595917',
    category: 'Chicken',
  },
  {
    _id: '64284d2e5cc669661c595918',
    category: 'Dessert',
  },
  {
    _id: '64284d2e5cc669661c595919',
    category: 'Goat',
  },
  {
    _id: '64284d2e5cc669661c59591a',
    category: 'Lamb',
  },
  {
    _id: '64284d2e5cc669661c59591b',
    category: 'Miscellaneous',
  },
  {
    _id: '64284d2e5cc669661c59591c',
    category: 'Pasta',
  },
  {
    _id: '64284d2e5cc669661c59591d',
    category: 'Pork',
  },
  {
    _id: '64284d2e5cc669661c59591e',
    category: 'Seafood',
  },
  {
    _id: '64284d2e5cc669661c59591f',
    category: 'Side',
  },
  {
    _id: '64284d2e5cc669661c595920',
    category: 'Starter',
  },
  {
    _id: '64284d2e5cc669661c595921',
    category: 'Vegan',
  },
  {
    _id: '64284d2e5cc669661c595922',
    category: 'Vegetarian',
  },
];

const CategoriesList = () => {
  return (
    <nav className="w-full">
      <ul className="flex">
        {categoriesList.map(category => {
          return (
            <li className="mr-14" key={category._id}>
              <NavLink to={`/categoriesPage/${category.category}`}>
                {category.category}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoriesList;
