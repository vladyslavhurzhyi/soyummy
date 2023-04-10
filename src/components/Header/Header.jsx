import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Navigation } from './Navigation';
import { UserPanel } from './UserPanel';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
// import { UserLogoModal } from './UserLogo/UserLogoModal';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/auth/authSelectors';

export const Header = () => {
  const shouldShowUser = useSelector(isLoggedIn);
  return (
    <header className="absolute w-full z-20">
      <div class="flex justify-between items-center h-auto pt-[28px] px-[100px] pb-[75px] lg:pt-19 xl:pt-19">
        <Logo className="" />
        <div className="">
          <Navigation />
        </div>
        <div
          className="fixed; top: 0; left: 0; w-[500px]; h-[425px]; bg-{#ECECEC}"
          пше
        >
          <div className></div>
        </div>
        <div className="  ">
          <div className=" mx-20 ">{shouldShowUser && <UserPanel />}</div>
        </div>
        <div>
          <ToggleButton />
        </div>
      </div>

      {/* =======
    <header className="flex mx-10 mt-8 ">
      <Logo className=" " />
      <Navigation />
      <div className=" mx-20 ">{shouldShowUser && <UserPanel />}</div>
      <div>
        <ToggleButton />
      </div>
>>>>>>> main */}
    </header>
  );
};
