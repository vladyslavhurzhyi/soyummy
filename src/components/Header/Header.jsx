import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Navigation } from './Navigation';
import { UserLogo } from './UserLogo/UserLogo';
import { ToggleButton } from "components/ToggleButton/ToggleButton"
export const Header = () => {
  return (
    <header className="absolute w-full z-10">
      {/* <div class="mx-auto px-4 sm:px-8 xl:px-100 max-w-sm sm:max-w-md lg:max-w-4xl"> */}
        <div class="flex justify-between items-center h-auto pt-[28px] px-[100px] pb-[75px] lg:pt-19 xl:pt-19">
          <Logo className="" />
          <div  className="">
            <Navigation/>
          </div>
        <div className="fixed; top: 0; left: 0; w-[500px]; h-[425px]; bg-{#ECECEC}"пше>
          <div className></div>
        </div>
          <div className="  "> 
            <UserLogo/>
          </div>
          <div>
            <ToggleButton/>  
          </div>
        </div>
      {/* </div> */}
    </header>
  );
};
