import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { Logo } from 'components/Logo/Logo';
import React from 'react';

export const FavoriteItem = ({ img, title, description, time }) => {
  return (
    <>
      <div className="mx-24 border-2 border-red-500 max-w-[1250px] ">
        <div className="flex">
          <img
            className="w-[318px] h-[324px] mx-10 my-10"
            src={img}
            alt={img}
          />
          <div className=" bg-slate-400">
            <div>
              <h1 className="text-2xl mb-12">{title}</h1>
              <button className="flex ml-auto ">
                <Logo />
              </button>
            </div>
            <div className="flex flex-col mt-10 mb-10 justify-between">
              <div className="flex flex-col">
                <p className="text-lg">{description}</p>
              </div>
              <div className="flex justify-between">
                <p className="">{time}</p>
                <CurveBtn cssClass="seerecipe-btn" text="See recipe" />
              </div>
            </div>
            {/* <div className="flex flex-col justify-between my-10 mr-10"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
