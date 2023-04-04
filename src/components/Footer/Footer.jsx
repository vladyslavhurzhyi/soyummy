import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { Logo } from 'components/Logo/Logo';

export const Footer = () => {
  return (
    <div>

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
        }}
      >
        {/* <Navigation></Navigation> */}

        <div style={{
          display: 'flex',
          alignItems: 'center',
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
              <li><p>Database of recipes that can be replenished </p></li>
              <li style={{marginTop: 12}}><p>Flexible search for desired and unwanted ingredients</p></li>
              <li style={{marginTop: 12}}><p>Ability to add your own recipes with photos</p></li>
              <li style={{marginTop: 12}}><p>Convenient and easy to use</p></li>
            </ul>
          </div>
          <Nav/>
          <SubscribeForm/>
        </div>
        <div style={{marginTop: 41}}>
          <FollowUs />
        </div>
      
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBlock: 50}}>
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
        {/* <img src="/bgBottomRightImage.png" alt="leafs" width={438} height={474}
          style={{
            position: 'absolute',
            right: 0,
            zIndex: -1,
            // filter: blur('4.5px'),
            // transform: rotate()
          }} /> */}
      </div>
    </div>
  )
};
