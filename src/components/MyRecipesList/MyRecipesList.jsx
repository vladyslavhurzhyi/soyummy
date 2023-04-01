import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';
import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import React from 'react';

export const MyRecipesList = () => {
  return (
    <div>
      <MyRecipesItem />
      <RecipesListPaginator />
    </div>
  );
};
