import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Navigation } from './Navigation';
import { UserLogo } from './UserLogo/UserLogo';
import { ToggleButton } from "components/ToggleButton/ToggleButton"
export const Header = () => {
  return (
    <header className="flex mx-10 mt-8 ">
      <Logo className=" "/>
        <Navigation/>
        <div className=" mx-20 "> 
          <UserLogo/>
        </div>
        <div>
          <ToggleButton/>  
        </div>
    </header>
  );
};
