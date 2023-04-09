import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Logo } from 'components/Logo/Logo';
import logosvgMob from '../Logo/logosvgMob.svg';
import { Nav } from './Nav';

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
        className="blur-sm absolute left-0 -top-[210px] xl:-top-[425px]"
        style={{
          // position: 'absolute',
          // left: 0,
          zIndex: -100,
          // top: -425,
        }}
      >
        <img
          src={require('./images/bgBottomLeftImage.png')}
          alt="leafs"
          className="w-[256px] h-[392px] xl:w-[558px] xl:h-[852px]"
        />
      </div>
      <div
        className="px-[85px] md:pl-[32px] md:pr-[94px] xl:px-[100px] pt-[28px] pb-[18px] md:pt-[50px] md:pb-[24px] xl:pt-[64px] xl:pb-[50px] flex justify-center items-center flex-col"
        style={{
          backgroundColor: '#22252A',
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // flexDirection: 'column',
          // paddingTop: 64,
          // paddingBottom: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          // paddingHorizontal: 100,
          // position: 'relative',
          // overflow: 'visible',
          // zIndex: 1000,
        }}
      >
        <div
          className="flex flex-col xl:flex-row md:items-start md:justify-center xl:justify-between xl:w-full"
          style={
            {
              // display: 'flex',
              // alignItems: 'flex-start',
              // justifyContent: 'space-between',
            }
          }
        >
          <div className="flex md:justify-between">
            <div
              className="flex flex-col mr-0 xl:mr-[159px]"
              style={{
                // display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                // flexDirection: 'column',
                // marginRight: 159,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 40,
                }}
              >
                <Logo
                  newLogo={logosvgMob}
                  cssClassIcon="iconLogoFooterMob "
                  cssClassDiv="divIconFooterMob"
                />

                <h2
                  className="text-[18px]/[18px] md:text-[28px]/[28px]"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    // fontSize: 28,
                    color: 'white',
                    marginLeft: 12,
                  }}
                >
                  So Yummy
                </h2>
              </div>
              <ul
                className="hidden md:block xl:block"
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
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[18px]">
                    Database of recipes that can be replenished
                  </p>
                </li>
                <li className="mt-3">
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[18px]">
                    Flexible search for desired and unwanted ingredients
                  </p>
                </li>
                <li className="mt-3">
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[18px]">
                    Ability to add your own recipes with photos
                  </p>
                </li>
                <li className="mt-3">
                  <p className="md:text-[14px]/[18px] xl:text-[18px]/[18px]">
                    Convenient and easy to use
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block xl:hidden md:ml-[173px]">
              <Nav />
            </div>
          </div>
          {/* <div className='flex justify-self-center'> */}
          <Navigation />
          {/* </div> */}
        </div>
      </div>
      <div
        className="pt-[28px] pb-[28px] xl:py-[50px]"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
          style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 14,
            color: '#22252A',
            opacity: 0.5,
            marginLeft: 40,
          }}
        >
          Terms of Service
        </NavLink>
        <div
          className="blur-sm absolute right-0 bottom-0"
          style={{
            // position: 'absolute',
            // right: 0,
            zIndex: 100,
            // bottom: 0,
          }}
        >
          <img
            src={require('./images/bgBottomRightImage.png')}
            alt="leafs"
            className="w-[180px] h-[172px] xl:w-[438px] xl:h-[474px]"
            // width={438} height={474}
          />
        </div>
      </div>
    </footer>
  );
};
