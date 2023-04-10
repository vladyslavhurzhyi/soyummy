import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RecipeItem = ({
  img,
  id,
  title,
  description,
  time,
  cssClass = 'seerecipe-btn',
  remove,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <li className="flex mx-auto mb-10 last:mb-0 bg-[#ffffff] rounded-lg dark:bg-accentHalfDark">
        <div className="w-[1240px]">
          <div className="flex my-10">
            <img
              className="w-[318px] h-[324px] mr-10 rounded-lg object-cover ml-10"
              src={img}
              alt={img}
            />
            <div className="flex flex-col mr-10 w-full">
              <div className="flex mb-8 ">
                <h2 className="text-2xl dark:text-[#FAFAFA]">{title}</h2>
                <button
                  className="flex ml-auto "
                  onClick={() => {
                    dispatch(remove(id));
                  }}
                >
                  <Logo
                    trash
                    cssClassIcon="iconTrash"
                    cssClassDiv="divIconTrash"
                  />
                </button>
              </div>
              <div className="flex h-full w-full justify-between flex-col ">
                <p className="text-lg">{description}</p>
                <div className="flex justify-between ">
                  <p className="mt-auto text-sm font-medium font-main dark:text-[#FAFAFA]">
                    {time} min
                  </p>
                  <CurveBtn
                    cssClass={cssClass}
                    text="See recipe"
                    onClick={() => {
                      navigate(`/recipe/${id}`);
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
