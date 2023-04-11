import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/favoriteRecipesOperations';

export const RecipeItem = ({
  img,
  id,
  title,
  description,
  time,
  cssClass = 'seerecipe-btn',
  remove,
  paginationPage,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = async () => {
    await dispatch(remove(id));
    await dispatch(getFavoriteRecipes(paginationPage));
  };
  return (
    <>
      <li className="flex mx-auto mb-10 last:mb-0 bg-[#ffffff] rounded-lg dark:bg-accentHalfDark min-w-[343px] ">
        <div className="min-w-[343px] md:max-w-[704px] xl:max-w-[1240px] ">
          <div className="flex my-[14px] md:my-7 xl:my-10 ">
            <img
              className="w-[124px] h-[124px] mx-[14px]  md:w-[228px] md:h-[232px]  xl:w-[318px] xl:h-[324px] md:mr-6 md:ml-6 xl:mx-10 rounded-lg object-cover  "
              src={img}
              alt={img}
            />
            <div className="flex flex-col mr-[9px] md:mr-6 xl:mr-10 w-full">
              <div className="flex  mb-[14px] xl:mb-8 ">
                <h2 className="text-sm xl:text-2xl md:text-[24px]  dark:text-[#FAFAFA]">
                  {title}
                </h2>
                <button className="flex ml-auto " onClick={deleteHandler}>
                  <Logo
                    trash
                    cssClassIcon="iconTrash"
                    cssClassDiv="divIconTrash"
                  />
                </button>
              </div>
              <div className="flex h-full w-full justify-between flex-col ">
                <p className="text-[8px] md:text-sm xl:text-lg ">
                  {description}
                </p>
                <div className="flex justify-between ">
                  <p className="mt-auto text-[10px] md:text-sm xl:text-lg font-medium font-main dark:text-[#FAFAFA]">
                    {time} min
                  </p>
                  <CurveBtn
                    cssClass={cssClass}
                    text="See recipe"
                    onClick={() => {
                      navigate(`/recipes/${id}`);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
