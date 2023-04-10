import React from 'react';
import { Navigation } from './Navigation';
import { MobMenuCloseBtn } from './MobMenuCloseBtn/MobMenuCloseBtn';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { ToggleButton } from "components/ToggleButton/ToggleButton"

export const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="">
      <div onClick={() => closeMenu()}>
        <Link to="/main" className="">
          <Logo />
        </Link>
      </div>
      <MobMenuCloseBtn className="" closeMenu={closeMenu} />
      <Navigation closeMenu={closeMenu} />
      <ToggleButton/> 
    </div>
  );
};

