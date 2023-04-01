import { Loader } from 'components/Loader/Loader';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import React from 'react';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <MainPageTitle pageTitle="Categories" className="section-title" />
      <MainPageTitle pageTitle="Categories" className="section-title-accent" />
      <div className="flex justify-center mt-8">
        <button className="main-btn">Search</button>
        <button className="custom-btn">Search</button>
        <Loader />
      </div>
    </>
  );
};

export default Home;
