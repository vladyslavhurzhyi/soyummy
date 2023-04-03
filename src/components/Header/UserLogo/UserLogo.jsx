import React, { useState } from "react";
import { UserAvatar } from './UserAvatar';
import { UserName } from './UserName';
import { UserLogoModal } from './UserLogoModal';
import { LogoutBtn } from './LogoutBtn';

export const UserLogo = () => {
  const [showModal, setShowModal] = useState(false);
  const handleUserLogoClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <div >
      <div onClick={handleUserLogoClick}>
        <UserAvatar />
        <UserName />
      {showModal && (
        <UserLogoModal onClose={handleModalClose}>
          <button >EditProfile</button>
          <LogoutBtn />
        </UserLogoModal>
      )}
      </div>
    </div>
  );
};