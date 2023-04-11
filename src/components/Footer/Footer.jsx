import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Logo } from 'components/Logo/Logo';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';

export const Footer = () => {
  return (
    <footer
      style={{
        zIndex: 0,
        position: 'relative',
        overflow: 'visible',
        width: '100%',
      }}
    >
      <div
        className="blur-sm absolute left-0 -top-[210px] lg:-top-[425px] z-[-100]">
        <img
          src={require('./images/bgBottomLeftImage.png')}
          alt="leafs"
          className="w-[256px] h-[392px] lg:w-[558px] lg:h-[852px]"
        />
      </div>
      <div
        className="flex justify-center items-center flex-col px-[85px] md:pl-[32px] md:pr-[94px] lg:px-[60px] xl:px-[100px] pt-[28px] pb-[18px] md:pt-[50px] md:pb-[24px] lg:pt-[64px] lg:pb-[50px] "
        style={{
          backgroundColor: '#22252A',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-start md:justify-center lg:justify-between w-full max-w-[1240px]">
          <div className="flex justify-center">
            <div
              className="flex flex-col mr-0 lg:mr-[0px]"
              style={{
                // display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                // flexDirection: 'column',
                // marginRight: 159,
              }}
            >
              <div className='flex items-center justify-center mb-[40px]'>
                <Logo
                  cssClassIcon="iconLogoFooterMob"
                  cssClassDiv="divIconFooterMob"
                />
                <h2
                  className="text-[18px]/[18px] md:text-[28px]/[28px] ml-[12px]"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  So Yummy
                </h2>
              </div>
              <ul className="hidden md:block lg:block lg:min-w-[340px] lg:max-w-[360px] xl:min-w-[380px] xl:max-w-[420px]"
                style={{
                  fontFamily: 'Poppins',
                  // fontWeight: 400,
                  lineHeight: 1.33,
                  color: 'white',
                  listStyleType: 'disc',
                  // width: 418,
                }}
              >
                <li>
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px]">
                    Database of recipes that can be replenished
                  </p>
                </li>
                <li className="mt-3">
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px]">
                    Flexible search for desired and unwanted ingredients
                  </p>
                </li>
                <li className="mt-3">
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px]">
                    Ability to add your own recipes with photos
                  </p>
                </li>
                <li className="mt-3">
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px]">
                    Convenient and easy to use
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block lg:hidden md:ml-[173px]">
              <Nav />
            </div>
          </div>
          <div className='flex justify-center lg:hidden w-full md:mt-[72px]'>
            <Navigation />
          </div>
          <div className='hidden lg:flex'><Navigation /></div>
          <div className='hidden lg:flex'><SubscribeForm/></div>
        </div>
      </div>
      <div
        className="flex items-center justify-center relative overflow-hidden pt-[28px] pb-[28px] md:pt-[32px] md:pb-[32px] lg:py-[50px]">
        <p
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 14,
            color: '#22252A',
            opacity: 0.5,
          }}
        >
          © 2023 All Rights Reserved.
        </p>
        <NavLink className='ml-[14px] md:ml-[28px] lg:ml-[40px]'
          style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 14,
            color: '#22252A',
            opacity: 0.5,
            // marginLeft: 40,
          }}
        >
          Terms of Service
        </NavLink>
        <div
          className="blur-sm absolute right-0 bottom-0 z-100">
          <img
            src={require('./images/bgBottomRightImage.png')}
            alt="leafs"
            className="w-[180px] h-[172px] lg:w-[438px] lg:h-[474px]"
          />
        </div>
      </div>
    </footer>
  );
};
