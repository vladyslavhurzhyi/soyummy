import { useState } from 'react';
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import categories from '../../data/category.json';
import timeList from '../../data/time.json';

// console.log(categories);
// console.log(timeList);

export const ResipeDescriptionFields = ({ data, setData }) => {
  const [images, setImages] = useState([]);

  console.log(images);

  const handleFieldChange = e => {
    const { id, value } = e.target;
    let _formData = { ...data };
    // _formData[id] = id === 'isPublic' ? !_formData.isPublic : value;
    _formData[id] = value;
    setData(_formData);
  };

  const uploader = Uploader({ apiKey: 'free' });
  const uploaderOptions = {
    multi: false,
    styles: {
      colors: {
        primary: '#8BAA36',
      },
    },
  };

  const MyUploadButton = ({ setImages }) => (
    <UploadButton
      uploader={uploader}
      options={uploaderOptions}
      onComplete={setImages}
    >
      {({ onClick }) => (
        <button
          onClick={onClick}
          className="border-dashed border-2 rounded-xl border-accentGray text-zinc-50 py-3 px-2 flex flex-col items-center hover:border-accentLighter  focus:border-accentLighter  hover:text-accentLighter  focus:text-accentLighter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-transparent hover:fill-accentGray focus:fill-accentGray hover:stroke-accentMain focus:stroke-accentMain stroke-accentGray w-12 h-12 stroke-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
          upload image
        </button>
      )}
    </UploadButton>
  );

  const MyUploadedImages = ({ images }) =>
    images.map(img => {
      // Tip: save 'filePath' to your DB (not 'fileUrl').
      const filePath = img.filePath;
      const fileUrl = uploader.url(filePath, 'thumbnail'); // "raw" for un-transformed file.
      return (
        <img
          src={fileUrl}
          alt="recipe poster"
          className="block w-full h-full object-cover"
        ></img>
        // <p
        //   key={fileUrl}
        //   className="border-dashed border-2 rounded-xl border-accentGray text-zinc-50 py-4 px-2 flex flex-col items-center"
        // >
        //   Downloaded successfully
        //   <a
        //     href={fileUrl}
        //     target="_blank"
        //     rel="noreferrer"
        //     className="text-accentGray text-xs"
        //   >
        //     click to preview
        //   </a>
        // </p>
      );
    });

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-[280px] h-[280px] mx-auto mb-8 xl:w-[360px] xl:h-[360px] md:mx-0 md:mb-o md:mr-8 bg-accentMain rounded-lg flex justify-center items-center">
        {images.length ? (
          <MyUploadedImages images={images} />
        ) : (
          <MyUploadButton setImages={setImages} />
        )}

        {/* <p>Input for photo</p> */}
        {/* <input
          type="file"
          multiple
          accept="image/*"
          onChange={e => setImage(e.target.files)}
        /> */}
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
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200"
            value={data.title}
            onChange={handleFieldChange}
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
            id="description"
            required
            className="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200"
            value={data.description}
            onChange={handleFieldChange}
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
              id="category"
              required
              value={data.category}
              onChange={handleFieldChange}
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
              id="time"
              required
              value={data.time}
              onChange={handleFieldChange}
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
    </div>
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
