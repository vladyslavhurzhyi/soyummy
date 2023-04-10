export const ResipeMethodFields = ({ data, updateData }) => {
  // const [method, setMethod] = useState('');
  // console.log(data);
  // const handleFieldChange = e => {
  //   const { id, value } = e.target;
  //   let _recipe = { ...data };
  //   _recipe[id] = id === 'isPublic' ? !_recipe.isPublic : value;
  //   setData(_recipe);
  // };

  return (
    <div className="w-full ">
      <label
        htmlFor="method"
        className="font-main font-semibold text-secondaryText text-customBase dark:text-whiteText"
      >
        Recipe Preparation
      </label>
      <textarea
        name="method"
        value={data.instructions}
        id="instructions"
        required
        placeholder="Enter recipe method"
        onChange={updateData}
        className="p-3 block w-full h-40 my-[18px] md:my-[32px] md:w-2/3 lg:w-1/2 rounded-lg bg-accentGray border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:border-accentMain border-transparent dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"
      ></textarea>
      <label className="text-gray-500 text-customXs md:text-customSm ">
        <input
          type="checkbox"
          id="isPublic"
          value={data.isPublic}
          onChange={updateData}
          className="appearance-none "
        />{' '}
        add to the public recipe database SoYummy
      </label>
      {/* <span className="text-sm text-red-600 hidden" id="error">
            Category has to be selected
          </span> */}
    </div>
  );
};
