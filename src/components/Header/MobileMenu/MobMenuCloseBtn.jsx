import React from 'react';
import { ReactComponent as NavClose } from './images/navMobileClose.svg';

export const MobMenuCloseBtn = ({ closeMenu }) => {
  return (
    <button
      className=""
      onClick={() => {
        closeMenu();
      }}
    >
      <NavClose />
    </button>
  );
};

