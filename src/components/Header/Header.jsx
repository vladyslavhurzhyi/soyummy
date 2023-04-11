import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Navigation } from './Navigation';
import { UserPanel } from './UserPanel/UserPanel';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
// import { UserLogoModal } from './UserLogo/UserLogoModal';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/auth/authSelectors';
import { MobMenu } from './MobMenu';

export const Header = () => {
  const shouldShowUser = useSelector(isLoggedIn);
  return (
    <header className="absolute w-full z-20 px-4 py-6 md:px-9 xl:px-[100px]">
      <div class="flex items-center ">
        <Logo className="" />

        <Navigation />

        <div className="ml-auto">
          <div className="">{shouldShowUser && <UserPanel />}</div>
        </div>
        <div className="hidden xl:block">
          <ToggleButton />
        </div>
        <div>
          <MobMenu />
        </div>
      </div>
    </header>
  );
};
