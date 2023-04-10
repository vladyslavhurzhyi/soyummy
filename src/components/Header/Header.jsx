import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Navigation } from './Navigation';
import { UserPanel } from './UserPanel';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/auth/authSelectors';
export const Header = () => {
  const shouldShowUser = useSelector(isLoggedIn);
  return (
    <header className="flex mx-10 mt-8 ">
      <Logo className=" " />
      <Navigation />
      <div className=" mx-20 ">{shouldShowUser && <UserPanel />}</div>
      <div>
        <ToggleButton />
      </div>
    </header>
  );
};
