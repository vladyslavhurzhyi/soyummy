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
        className="p-3 block w-full h-40 my-[18px] md:my-[32px] md:w-2/3 lg:w-1/2 rounded-lg bg-accentGray border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-transparent dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"
      ></textarea>
      <div className="flex relative">
        <input
          type="checkbox"
          id="isPublic"
          onChange={updateData}
          className="appearance-none text-accentMain cursor-pointer w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded bg-transparent border-solid border-opacity-50 checked:opacity-0 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer"
        />
        <div className="absolute flex justify-center items-center w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded pointer-events-none bg-transparent opacity-0 border border-solid border-opacity-50 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer-checked:opacity-100">
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2.5 md:w-5 h-2.5 md:h-5"
          >
            <path
              d="M7.77377 1.01229C8.04472 0.612637 8.58836 0.508303 8.98801 0.779256C9.38767 1.05021 9.492 1.59384 9.22105 1.9935L4.47925 8.98765C4.13243 9.4992 3.37879 9.4992 3.03197 8.98765L0.779622 5.66544C0.508669 5.26578 0.613003 4.72215 1.01266 4.45119C1.41231 4.18024 1.95595 4.28457 2.2269 4.68423L3.75561 6.93907L7.77377 1.01229Z"
              fill="#8BAA36"
            />
          </svg>
        </div>
        <p className="absolute top-1 left-6 md:top-2 md:left-11 text-gray-500 text-customRecipesTime md:text-customSm dark:text-whiteText">
          add to the public recipe database SoYummy
        </p>
      </div>
    </div>
  );
};
