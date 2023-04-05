import { RecipeItem } from '../RecipeItem/RecipeItem';

export const SearchedRecipesList = ({ recipes, cssClass }) => {
  return (
    <>
      <div>
        <ul className="flex flex-col">
          {recipes.map(recipe => {
            return (
              <RecipeItem
                key={recipe._id}
                img={recipe.preview}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                cssClass={cssClass}
              ></RecipeItem>
            );
          })}
        </ul>
      </div>
    </>
  );
};
