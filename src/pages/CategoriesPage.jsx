// import { useEffect } from 'react';
// import { getCategoriesList } from 'service/Api/authUserAPI';

const CategoriesPage = () => {
  // temporary list. waiting for backend
  const categoriesList = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];
  // temporary list. waiting for backend

  return (
    <div className="mx-auto">
      <h1>Categories</h1>
      <nav className="w-full">
        <ul className="flex">
          {categoriesList.map(category => {
            return (
              <li className="mr-14" key={category}>
                <a href="123">{category}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default CategoriesPage;
