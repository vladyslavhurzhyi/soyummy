import { RecipeItem } from '../RecipeItem/RecipeItem';

export const RecipesList = ({ data, cssClass }) => {
  return (
    <>
      <div>
        <ul className="flex flex-col">
          {data.map(itemProps => {
            return (
              <RecipeItem
                key={itemProps._id}
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
