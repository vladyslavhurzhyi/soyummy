import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Logo } from 'components/Logo/Logo';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { ReactComponent as Svg } from './images/elipse.svg';

export const Footer = () => {
  return (
    <footer className="before:bg-main_container_mob_leaf md:before:bg-main_container_tab_leaf xl:before:bg-main_container_desc_leaf before:bg-no-repeat before:bg-[left_0_bottom_-270px] md:before:bg-[left_0_bottom_-370px] xl:before:bg-[left_0_bottom_-515px] before:content-[''] before:block before:m-0 before:w-full before:h-[92px] md:before:h-[215px] xl:before:h-[255px] z-0 relative w-full">
      <div
        className="flex justify-center items-center flex-col bg-accentDark dark:bg-accentMain px-[85px] md:pl-[32px] md:pr-[94px] xl:px-[100px] pt-[28px] pb-[18px] md:pt-[50px] md:pb-[24px] xl:pt-[64px] xl:pb-[50px] "
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="flex flex-col xl:flex-row xl:items-start md:justify-center xl:justify-between w-full max-w-[1240px]">
          <div className="flex justify-center">
            <div
              className="flex flex-col mr-0 xl:mr-[0px]"
              style={{
                // display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                // flexDirection: 'column',
                // marginRight: 159,
              }}
            >
              <div className="flex items-center justify-center mb-[40px]">
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
              <ul
                className="hidden md:block xl:block xl:min-w-[380px] xl:max-w-[430px]"
                style={{
                  fontFamily: 'Poppins',
                  // fontWeight: 400,
                  lineHeight: 1.33,
                  color: 'white',
                }}
              >
                <li className="flex flex-row justify-start items-center ml-[10px]">
                  <Svg alt="elipse"></Svg>
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px]">
                    Database of recipes that can be replenished
                  </p>
                </li>
                <li className="mt-3 flex flex-row justify-start items-start ml-[10px]">
                  <Svg
                    alt="elipse"
                    className="mt-[9px] w-[4.8px] h-[4.5px]"
                  ></Svg>
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px]">
                    Flexible search for desired and unwanted ingredients
                  </p>
                </li>
                <li className="mt-3 flex flex-row justify-start items-center ml-[10px]">
                  <Svg alt="elipse"></Svg>
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px]">
                    Ability to add your own recipes with photos
                  </p>
                </li>
                <li className="mt-3 flex flex-row justify-start items-center ml-[10px]">
                  <Svg alt="elipse"></Svg>
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px]">
                    Convenient and easy to use
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block xl:hidden md:ml-[173px]">
              <Nav />
            </div>
          </div>
          <div className="flex justify-center xl:hidden w-full md:mt-[72px]">
            <Navigation />
          </div>
          <div className="hidden xl:flex">
            <Navigation />
          </div>
          <div className="hidden xl:flex">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative overflow-hidden pt-[28px] pb-[28px] md:pt-[32px] md:pb-[32px] xl:py-[50px]">
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
        <NavLink
          className="ml-[14px] md:ml-[28px] xl:ml-[40px]"
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
        <div className="blur-sm absolute right-[-20px] bottom-[-40px] md:right-[-10px] md:bottom-[-105px] xl:right-[0px] xl:bottom-[-150px] z-100 -rotate-[24deg]">
          <img
            src={require('./images/leafs.png')}
            alt="leafs"
            className="w-[190px] h-[172px] md:w-[328px] md:h-[314px] xl:w-[488px] xl:h-[474px]"
          />
        </div>
      </div>
    </footer>
  );
};
