import { Loader } from 'components/Loader/Loader';
// import { SkeletonRecipe } from 'components/Skeleton/Skeleton';
import { RecipeItem } from '../RecipeItem/RecipeItem';

export const RecipesList = ({
  data,
  cssClass,
  removeRecipe,
  isLoading,
  paginationPage,
}) => {
  return (
    <>
      <div>
        <ul className="flex flex-col mt-[100px] mb-[50px]  font-main dark:bg-accentDarker dark:text-[#FAFAFA99]">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {data.map(itemProps => {
                return (
                  <RecipeItem
                    paginationPage={paginationPage}
                    remove={removeRecipe}
                    key={itemProps._id}
                    id={itemProps._id}
                    img={itemProps.thumb}
                    title={itemProps.title}
                    description={itemProps.description}
                    time={itemProps.time}
                    cssClass={cssClass}
                  ></RecipeItem>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </>
  );
};
