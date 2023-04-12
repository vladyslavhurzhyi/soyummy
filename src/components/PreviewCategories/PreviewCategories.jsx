import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentForMain } from 'redux/previewCategories/categoriesSelectors';
import { getMainCategories } from 'redux/previewCategories/categoriesOperations';
import { useMediaQuery } from 'react-responsive';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { NavLink, Link, useNavigate } from 'react-router-dom';

export const PreviewCategories = () => {
  const categories = useSelector(getContentForMain);

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length <= 0) {
      const params = { categoriesLimit: 4, recipesInCategory: 4 };
      dispatch(getMainCategories(params));
    }
  }, [dispatch, categories]);

  let numCard;
  if (isDesktop) {
    numCard = 4;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 1;
  }

  return (
    <ul className="container   xl:px-0 flex flex-col gap-24">
      {categories.map(({ category, recipes }) => {
        const onClick = e => {
          navigate(`/categories/${category}`);
        };
        if (recipes.length >= 4)
          return (
            <li key={category} className="text-left ">
              <p className="font-semibold leading-7 text-[28px] md:text-[44px] md:leading-[44px] tracking-tight text-mainText capitalize mb-10 dark:text-whiteText">
                {category}
              </p>
              <ul className="mb-[50px] flex flex-wrap w-full gap-0 md:gap-8 xl:gap-3 justify-center md:justify-between">
                {recipes.slice(0, numCard).map(({ _id, title, preview }) => (
                  <div
                    key={_id}
                    className="w-[100%] h-[323px] rounded-lg relative md:w-[47%] xl:w-[24%] object-cover"
                  >
                    <NavLink to={`/recipes/${_id}`}>
                      <img
                        src={preview}
                        alt={title}
                        className="h-[323px] w-full rounded-lg"
                      />
                      <p className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-[18px] rounded-lg w-[90%] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark ">
                        {title}
                      </p>
                    </NavLink>
                  </div>
                ))}
              </ul>
              <Link to="/categories/breakfast" className="flex justify-end">
                <CurveBtn
                  type={'button'}
                  onClick={onClick}
                  text={'See all'}
                  cssClass="logout-btn"
                />
              </Link>
            </li>
          );
        return '';
      })}
    </ul>
  );
};

export default PreviewCategories;
