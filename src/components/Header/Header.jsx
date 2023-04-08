import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Navigation } from './Navigation';
import { UserLogo } from './UserLogo/UserLogo';
import { ToggleButton } from "components/ToggleButton/ToggleButton"
export const Header = () => {
  return (
    <header className="absolute w-full z-10">
      {/* <div class="mx-auto px-4 sm:px-8 xl:px-100 max-w-sm sm:max-w-md lg:max-w-4xl"> */}
        <div class="flex justify-between items-center h-auto pt-18 lg:pt-19 xl:pt-18">
            <Logo className=" "/>
            <Navigation/>
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
