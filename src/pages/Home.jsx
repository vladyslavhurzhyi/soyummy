import { FollowUs } from 'components/FollowUs/FollowUs';
import { Loader } from 'components/Loader/Loader';
import React from 'react';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div className="flex justify-center mt-8">
        <h1 className="section-title">
          Categories Add recipe Favorites My recipes Search Shopping list
        </h1>
        <button className="main-btn">Search</button>
        <button className="custom-btn">Search</button>
        <Loader />
      </div>
      <FollowUs />
    </>
  );
};

export default Home;
