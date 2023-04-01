import React from 'react';

export const MyRecipesItem = ({
  webformatURL,
  tags,
  user,
  previewHeight: time,
}) => {
  return (
    <li className="py-[14px] px-[9px] flex flex-row gap-[14px] bg-white rounded-lg ">
      <div className="">
        <img
          className="rounded-lg object-cover max-w-[124px] h-[124px]"
          src={webformatURL}
          alt={tags}
        />
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-[14px]">
          <h3 className="font-main font-medium text-customXxs tracking-[-0.24px] text-secondaryText">
            {user}
          </h3>
          <button type="button" className="w-6 h-6 bg-green-600"></button>
        </div>
        <p className="font-main font-normal text-customRecipesText tracking-[-0.02em] text-secondaryText mb-[24px]">
          General Chicken Is A Favorite Chinese Food Takeout Choice That Is
          Sweet And Slightly Spicy With A Kick From Garlic And Ginger.
        </p>
        <div className="flex flex-row justify-between items-center tracking-[-0.24px] text-secondaryText">
          <span className="font-main font-medium text-customRecipesTime">
            {time} min
          </span>
          <button>See reecipe</button>
        </div>
      </div>
    </li>
  );
};
