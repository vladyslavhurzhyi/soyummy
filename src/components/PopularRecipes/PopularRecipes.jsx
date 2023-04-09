export const PopularRecipes = ({ data }) => {
  return (
    <div className="relative md:w-80 lg:absolute lg:top-[500px] lg:left-[900px] xl:left-[1056px]">
      <h2 className="mb-2 font-main font-semibold text-secondaryText text-customBase">
        Popular recipe
      </h2>
      <ul className="flex flex-col">
        {data.map(({ _id, title, description, thumb }) => (
          <li key={_id} className="flex border-b-2 pb-3.5 pt-6 ">
            <img
              className="w-[104px] h-[85px] rounded-md mr-3"
              src={thumb}
              alt={title}
            />
            <div className="flex flex-col">
              {' '}
              <p className="text-customSm text-secondaryText font-medium ">
                {title}
              </p>
              <p className="text-xs text-gray-500 font-normal">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
