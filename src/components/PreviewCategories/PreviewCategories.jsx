import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentForMain } from 'redux/previewCategories/categoriesSelectors';
import { getMainCategories } from 'redux/previewCategories/categoriesOperations';
import { useMediaQuery } from 'react-responsive';

export const PreviewCategories = () => {
  const categories = useSelector(getContentForMain);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  useEffect(() => {
    dispatch(getMainCategories());
  }, [dispatch]);

  let numCard;
  if (isDesktop) {
    numCard = 4; // Десктоп
  } else if (isTablet) {
    numCard = 2; // Планшет
  } else {
    numCard = 1; // Мобильный
  }

  return (
    <ul className="container   xl:px-0 flex flex-col gap-24">
      {categories.map(({ _id, meals }) => (
        <li key={_id}>
          <p className="font-semibold leading-7 text-[28px] md:text-[44px] md:leading-[44px] tracking-tight text-mainText capitalize mb-10 ">
            {_id}
          </p>
          <ul className="mb-[50px] flex flex-wrap w-full gap-0 md:gap-8 xl:gap-3">
            {meals.slice(0, numCard).map(({ _id, title, preview }) => (
              <div
                key={_id}
                className="w-[343px] h-[323px] rounded-lg relative md:w-[47%] xl:w-[24%] object-cover"
              >
                <img
                  src={preview}
                  alt={title}
                  className="h-[323px] w-full rounded-lg"
                />
                <p className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-[18px] rounded-lg w-[307px] md:w-[300px] xl:w-[268px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {title}
                </p>
              </div>
            ))}
          </ul>
          <div to={`/categories/${_id}`}>See all</div>
        </li>
      ))}
    </ul>
  );
};
