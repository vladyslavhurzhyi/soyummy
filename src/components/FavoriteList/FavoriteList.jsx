import React, { useState, useEffect } from 'react';
import { RecipesList } from 'components/RecipesList/RecipesList';
// import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import api from 'service/Api/axiosBaseURL';

const itemProps = [
  {
    title: 'Sushi',
    description:
      'Sushi is a dish that originated in Japan. It’s made with specially prepared rice and typically some fish or seafood, which is usually raw, but is sometimes cooked. The word sushi refers to the rice that’s used, not the fish. In fact, sushi chefs in Japan go through years of training to learn how to properly prepare the rice and safely handle the fish and seafood.',
    time: '10min',

    id: 1,
  },
  {
    title: 'New York cheesecake',
    description:
      'This classic New York cheesecake is the ultimate cheesecake. It’s dense, rich and creamy and doesn’t require a water bath like most cheesecake recipes, so it’s incredibly easy to make. It’s truly one of the best cheesecakes I’ve ever had! Here’s how to make it perfect. If you’ve been searching for the richest, creamiest cheesecake, you’ve come to the right place. This is the best New York cheesecake recipe in the world.',
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

export const FavoriteList = () => {
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

  return <RecipesList data={data} />;
};
