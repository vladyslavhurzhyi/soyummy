import React from 'react';
import logo from './logosvg.svg';

export const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center w-10 h-10  xl:w-11 xl:h-11 bg-accentMain rounded-xl">
        <img
          src={logo}
          alt="logo"
          className="fill-white w-7 h-7 xl:w-[30px] xl:h-[30px] "
        ></img>
      </div>
    </>
  );
};
