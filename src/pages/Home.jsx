import { CurveBtn } from 'components/CurveBtn/CurveBtn';

import { Loader } from 'components/Loader/Loader';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

import React from 'react';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <MainPageTitle pageTitle="Categories" className="main-title" />
      <MainPageTitle pageTitle="Categories" className="main-title-accent" />
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
    </>
  );
};

export default Home;
