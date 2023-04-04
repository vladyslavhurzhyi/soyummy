import React from 'react';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { Loader } from 'components/Loader/Loader';
import { Logo } from 'components/Logo/Logo';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Favorites } from 'components/Favorites/Favorites';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <Logo />
      </div>
      <MainPageTitle pageTitle="Categories" className="main-title" />
      {/* <MainPageTitle pageTitle="Categories" className="main-title-accent" /> */}
      <FollowUs className="followus-footer" />
      <ToggleButton />
      <div className="flex justify-center mt-8">
        <div className="flex bg-hero w-full py-56 justify-center gap-4 bg-cover bg-center bg-no-repeat">
          <div>
            <CurveBtn cssClass="addblack-btn" text="Add"></CurveBtn>
            <CurveBtn cssClass="addbgreen-btn" text="Add"></CurveBtn>
          </div>

          <CurveBtn cssClass="registration-btn" text="Registration"></CurveBtn>
          <CurveBtn cssClass="signin-btn" text="Sign in"></CurveBtn>
        </div>
      </div>
      <Loader />
      <Favorites />
    </>
  );
};

export default Home;
