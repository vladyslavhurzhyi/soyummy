import React from 'react';
import { ReactComponent as MobMenuBtn } from './images/burgerMenu.svg';


export const MobMenuBurgerBtn = ({ openMenu }) => {
  return (
    <button
      className=""
      onClick={() => {
        openMenu();
      }}
    >
      <MobMenuBtn className="" />
    </button>
  );
};

