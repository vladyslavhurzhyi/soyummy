import React, { useState, useEffect } from 'react';
import api from 'service/Api/axiosBaseURL';
import { RecipesList } from 'components/RecipesList/RecipesList';
// import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

setAuthHeader(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ5YWVmMDViNmMxN2NkNWU0YmE3ZiIsIm5hbWUiOiJKb2huIiwiZW1haWwiOiJzbWl0aHF3ZXF3ZXNAbWFpbC5jb20iLCJpYXQiOjE2ODA3MTA0MjAsImV4cCI6MTY4MDc5NjgyMH0.UnGqFNBVe19RmL66MD2QgQ2S4s885HE1B4fdXQEekPA'
);

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
    const getRecipes = async (limit = 12, page = 1) => {
      try {
        const { data } = await api.get('/recipes', {
          params: {
            limit,
            page,
          },
        });
        console.log('data', data.data);

        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipes(12, 1);
  }, []);

  return <RecipesList cssClass={cssClass} data={data} />;
};
