import { RecipesList } from 'components/RecipesList/RecipesList';

export const SearchedRecipesList = ({ recipes }) => {
  return (
    <>
      <RecipesList recipes={recipes} />
    </>
  );
};
