import { RecipesList } from 'components/RecipesList/RecipesList';

export const SearchedRecipesList = ({ recipes, cssClass }) => {
  return <RecipesList cssClass={cssClass} data={recipes} />;
};
