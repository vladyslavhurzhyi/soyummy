import { useState } from 'react';
import categories from '../../data/category.json';
import timeList from '../../data/time.json';

// console.log(categories);
// console.log(timeList);

export const ResipeDescriptionFields = () => {
  const [image, setImage] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');

  console.log(image);

  return (
    // <div className="w-full ">
    <form id="form" noValidate className="flex flex-col md:flex-row">
      <div className="w-[280px] h-[280px] mx-auto mb-8 xl:w-[360px] xl:h-[360px] md:mx-0 md:mb-o md:mr-8 bg-accentMain rounded-lg flex justify-center items-center">
        {/* <p>Input for photo</p> */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={e => setImage(e.target.files)}
        />
      </div>
      <div className=" flex flex-col md:w-[400px] mt-2">
        <div className="relative z-0 w-full mb-6">
          <input
            type="text"
            name="title"
            placeholder=" "
            autoComplete="off"
            required
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label
            htmlFor="title"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm"
          >
            Enter Recipe Title
          </label>
          {/* <span className="text-sm text-red-600 hidden" id="error">Title is required</span> */}
        </div>
        <div className="relative z-0 w-full ">
          <input
            type="text"
            name="description"
            placeholder=" "
            autoComplete="off"
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <label
            htmlFor="description"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm"
          >
            Enter adout recipe
          </label>
          {/* <span className="text-sm text-red-600 hidden" id="error">
          Description is required
          </span> */}
        </div>
        <div className="flex flex-row space-x-4 my-6">
          <div className="relative z-0 w-full ">
            <select
              name="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200"
            >
              {categories.map(({ type }) => (
                <option
                  key={type}
                  value={type}
                  className="bg-lime-50 text-center"
                >
                  {type}
                </option>
              ))}
            </select>
            <label
              htmlFor="category"
              className="absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm"
            >
              Category
            </label>
            {/* <span className="text-sm text-red-600 hidden" id="error">
            Category has to be selected
          </span> */}
          </div>
          <div className="relative z-0 w-full ">
            <select
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200"
            >
              {timeList.map(({ time }) => (
                <option
                  key={time}
                  value={time}
                  className="bg-lime-50 text-center"
                >
                  {time}
                </option>
              ))}
            </select>
            <label
              htmlFor="time"
              className="absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm"
            >
              Cooking time
            </label>
            {/* <span className="text-sm text-red-600 hidden" id="error">
            Time has to be selected
          </span> */}
          </div>
        </div>
      </div>
    </form>
    // </div>
  );
};

// ('use strict');

// document.getElementById('button').addEventListener('click', toggleError);
// const errMessages = document.querySelectorAll('#error');

// function toggleError() {
//   // Show error message
//   errMessages.forEach(el => {
//     el.classList.toggle('hidden');
//   });

//   // Highlight input and label with red
//   const allBorders = document.querySelectorAll('.border-gray-200');
//   const allTexts = document.querySelectorAll('.text-gray-500');
//   allBorders.forEach(el => {
//     el.classList.toggle('border-red-600');
//   });
//   allTexts.forEach(el => {
//     el.classList.toggle('text-red-600');
//   });
// }
