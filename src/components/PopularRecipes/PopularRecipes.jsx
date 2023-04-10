import { Link } from 'react-router-dom';

export const PopularRecipes = ({ data }) => {
  return (
    <div className="relative md:w-full lg:w-80 lg:absolute lg:top-[500px] lg:left-[900px] xl:left-[1056px]">
      <h2 className="mb-2 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText">
        Popular recipe
      </h2>
      <ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-col">
        {data.map(({ _id, title, description, thumb }) => (
          <li
            key={_id}
            className="flex md:w-1/2 lg:w-full border-b-2 border-gray-300 pb-3.5 pt-6 pr-2 dark:border-gray-500"
          >
            <Link to={`/recipe/${_id}`} className="flex">
              <img
                className="w-[104px] h-[85px] rounded-md mr-3"
                src={thumb}
                alt={title}
              />
              <div className="flex flex-col">
                <p className="text-customSm text-secondaryText font-medium dark:text-whiteText">
                  {title}
                </p>
                <p className="text-xs text-gray-500 font-normal dark:text-gray-400">
                  {description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
