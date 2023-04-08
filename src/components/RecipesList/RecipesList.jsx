import { RecipeItem } from '../RecipeItem/RecipeItem';

export const RecipesList = ({ data, cssClass, removeRecipe }) => {
  return (
    <>
      <div>
        <ul className="flex flex-col mt-[100px] mb-[200px] font-main">
          {data.map(itemProps => {
            return (
              <RecipeItem
                remove={removeRecipe}
                key={itemProps._id}
                id={itemProps._id}
                img={itemProps.preview}
                title={itemProps.title}
                description={itemProps.description}
                time={itemProps.time}
                cssClass={cssClass}
              ></RecipeItem>
            );
          })}
        </ul>
      </div>
    </>
  );
};
