import { Link } from 'react-router-dom';
import { ReactComponent as TimeIcon } from 'images/svg/time.svg';

const RecipeCard = ({ id, title, text, thumb, time }) => {
  const timeMeasures = ['min', 'h'];
  return (
    <Link to={`/recipes/${id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-accentMain hover:scale-105 transition-transform duration-500">
        <img
          className="w-full object-cover group-hover:opacity-20 group-hover:saturate-150 transition-filterOpacity duration-500"
          src={thumb}
          alt={title}
          height={323}
          width={343}
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col px-4 py-6">
          <div className="flex flex-col h-full overflow-hidden mb-5 text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <p className="flex justify-end lg:text-sm xl:text-base items-center mb-5">
              {time && (
                <>
                  <TimeIcon className="w-4 h-4 mr-1 stroke-whiteText" />
                  {time}
                  {!timeMeasures.some(value => time.includes(value)) && ' min'}
                </>
              )}
            </p>
            <p className="my-auto text-center md:text-sm lg:text-xs xl:text-sm">
              {text}
            </p>
          </div>
          <h3
            title={title}
            className="w-full overflow-hidden whitespace-nowrap text-ellipsis mt-auto p-4 pb-5 lg:p-3 lg:pb-4 xl:p-4 xl:pb-5 rounded-lg lg:text-sm xl:text-base font-medium bg-white dark:bg-accentHalfDark text-secondaryText dark:text-whiteText transition-all duration-500"
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
