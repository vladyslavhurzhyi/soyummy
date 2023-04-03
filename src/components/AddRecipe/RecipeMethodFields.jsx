import { useState } from 'react';

export const ResipeMethodFields = () => {
  const [method, setMethod] = useState('');

  return (
    <div className="w-full ">
      <label
        htmlFor="method"
        className="font-main font-semibold text-secondaryText text-customBase"
      >
        Recipe Preparation
      </label>
      <textarea
        name="method"
        value={method}
        placeholder="Enter recipe method"
        onChange={e => setMethod(e.target.value)}
        className="p-3 block w-full h-40 my-[18px] md:my-[32px] md:w-2/3 lg:w-1/2 rounded-lg bg-accentGray border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:border-accentMain border-transparent"
      ></textarea>

      {/* <span className="text-sm text-red-600 hidden" id="error">
            Category has to be selected
          </span> */}
    </div>
  );
};
