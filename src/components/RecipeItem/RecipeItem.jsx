import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { Logo } from 'components/Logo/Logo';
import React from 'react';
import logo from './trash.svg';
// import imgDish from '../../images/salat.png';

export const RecipeItem = ({
  img,
  title,
  description,
  time,
  cssClass = 'seerecipe-btn',
}) => {
  return (
    <>
      <li className="flex mx-auto mb-10">
        <div className=" bg-zinc-50 w-[1240px] rounded-lg">
          <div className="flex my-10 mx-10 ">
            <img
              className="w-[318px] h-[324px] mr-10 rounded-lg object-cover"
              src={img}
              alt={img}
            />
            <div className="flex flex-col">
              <div className="flex mb-8">
                <h2 className="text-2xl ">{title}</h2>
                <button className="flex ml-auto ">
                  <Logo
                    newLogo={logo}
                    cssClassIcon="iconTrash"
                    cssClassDiv="divIconTrash"
                  />
                </button>
              </div>
              <div className="flex h-full justify-between flex-col">
                <p className="text-lg mr-[123px] ">{description}</p>
                <div className="flex justify-between">
                  <p className="mt-auto text-sm font-medium">{time} min</p>
                  <CurveBtn cssClass={cssClass} text="See recipe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
