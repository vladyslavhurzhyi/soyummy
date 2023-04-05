import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Logo } from 'components/Logo/Logo';
// import { transform } from 'framer-motion';

export const Footer = () => {
  return (
    <div
      style={{ zIndex: 0, position: 'relative', overflow: 'visible' }}
    >
      <div className='blur-sm' style={{
            position: 'absolute',
            left: 0,
            zIndex: -100,
            top: -425,
          }}>
          <img src={require("./images/bgBottomLeftImage.png")} alt="leafs" width={558} height={852} />
        </div>
      <div
        style={{
          backgroundColor: '#22252A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: 64,
          paddingBottom: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingHorizontal: 100,
          // position: 'relative',
          // overflow: 'visible',
          // zIndex: 1000,
        }}
      >
        

        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: 159,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}>
              <Logo />
              <h2
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 28,
                  color: 'white',
                  marginLeft: 12,
                }}
              >So Yummy</h2>
            </div>
            <ul style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.33,
              color: 'white',
              listStyleType: 'disc',
              width: 418,
            }}>
              <li><p>Database of recipes that can be replenished</p></li>
              <li className='mt-3'><p>Flexible search for desired and unwanted ingredients</p></li>
              <li className='mt-3'><p>Ability to add your own recipes with photos</p></li>
              <li className='mt-3'><p>Convenient and easy to use</p></li>
            </ul>
          </div>
          <Navigation/>
          {/* <Nav/>
          <SubscribeForm/> */}
        </div>

        {/* <div style={{marginTop: 41}}>
          <FollowUs />
        </div> */}

        {/* <div className='blur-sm' style={{
            position: 'absolute',
            left: 0,
            zIndex: -100,
            top: -425,
          }}>
          <img src={require("./images/bgBottomLeftImage.png")} alt="leafs" width={558} height={852} />
        </div> */}
      
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBlock: 50, position: 'relative', overflow: 'hidden'}}>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: 14,
          color: '#22252A',
          opacity: 0.5,
        }}>© 2023 All Rights Reserved.</p>
        <NavLink style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: 14,
          color: '#22252A',
          opacity: 0.5,
          marginLeft: 40,
        }}>Terms of Service</NavLink>
        <div className='blur-sm' style={{
            position: 'absolute',
            right: 0,
            zIndex: 100,
            bottom: 0,
          }}>
          <img src={require("./images/bgBottomRightImage.png")} alt="leafs" width={438} height={474} />
          {/* <img src="https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_1280.jpg" alt="leafs" width={438} height={474} /> */}
        </div>
        
      </div>
    </div>
  )
};
