import timeList from '../../data/time.json';

export const ResipeDescriptionFields = ({
  data,
  categories,
  updateData,
  updateImg,
  previewImg,
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-[280px] h-[280px] mx-auto mb-8 xl:w-[360px] xl:h-[360px] md:mx-0 md:mb-o md:mr-8 bg-accentMain rounded-lg flex justify-center items-center border-4 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain">
        <label htmlFor="thumb" className="block w-full h-full object-cover ">
          <img
            src={previewImg}
            alt="recipe poster"
            className="block w-full h-full object-cover rounded-lg "
          />
          <input
            className="hidden"
            type="file"
            id="thumb"
            name="thumb"
            onChange={updateImg}
            accept="image/png, image/jpg, image/jpeg"
          />
        </label>
      </div>
      <div className=" flex flex-col md:w-[400px] mt-2">
        <div className="relative z-0 w-full mb-6">
          <input
            type="text"
            name="title"
            placeholder=" "
            autoComplete="off"
            id="title"
            required
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200 dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
            value={data.title}
            onChange={updateData}
          />
          <label
            htmlFor="title"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText"
          >
            Enter Recipe Title
          </label>
        </div>
        <div className="relative z-0 w-full ">
          <input
            type="text"
            name="description"
            placeholder=" "
            autoComplete="off"
            id="description"
            required
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
            value={data.description}
            onChange={updateData}
          />
          <label
            htmlFor="description"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText"
          >
            Enter adout recipe
          </label>
        </div>
        <div className="flex flex-row space-x-4 my-6">
          <div className="relative z-0 w-full ">
            <select
              name="category"
              id="category"
              required
              value={data.category}
              onChange={updateData}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
            >
              <option value="" disabled hidden></option>
              {categories.map(({ _id, category }) => (
                <option
                  key={_id}
                  value={_id}
                  className="bg-lime-50 text-center dark:bg-accentMain"
                >
                  {category}
                </option>
              ))}
            </select>
            <label
              htmlFor="category"
              className="absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText"
            >
              Category
            </label>
          </div>
          <div className="relative z-0 w-full ">
            <select
              name="time"
              id="time"
              required
              value={data.time}
              onChange={updateData}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200 dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
            >
              <option value="" disabled hidden></option>
              {timeList.map(({ time }) => (
                <option
                  key={time}
                  value={time}
                  className="bg-lime-50 text-center dark:bg-accentMain"
                >
                  {time}
                </option>
              ))}
            </select>
            <label
              htmlFor="time"
              className="absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText"
            >
              Cooking time
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
