import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { RecipesList } from 'components/RecipesList/RecipesList';
// import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';

const itemProps = [
  {
    title: 'Salmon Eggs Benedict',
    description:
      'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
    time: '10min',

    id: 1,
  },
  {
    title: 'Apple Frangipan Tart',
    description:
      'Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.',
    time: '20min',

    id: 2,
  },
  {
    title: "Tso's Chicken",
    description:
      'General Tso’s Chicken Is A Favorite Chinese Food Takeout Choice That Is Sweet And Slightly Spicy With A Kick From Garlic And Ginger. General Tso’s Chicken was one of my favorite college days late night Chinese food delivery orders. The spicier, zestier less popular cousin to the ever popular Orange Chicken, General Tso’s Chicken is a fantastic option.',
    time: '20min',

    id: 3,
  },
];

export const MyRecipesList = ({ cssClass }) => {
  const [data, setData] = useState(itemProps);

  useEffect(() => {
    setData(itemProps);
  }, []);

  return <RecipesList cssClass={cssClass} data={data} />;
};
