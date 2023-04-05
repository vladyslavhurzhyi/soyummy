import { useState } from "react";
import { useSelector } from 'react-redux';

import { getName } from 'redux/auth/authSelectors';
import { getAvatar } from 'redux/auth/authSelectors';

import { Modal } from "./Modal";
import { UserLogoModal } from "./UserLogoModal";
import { UserInfoModal } from "./UserInfoModal";
import { UserConfirmModal } from "./UserConfirmModal";

export const UserLogo = () => {
  const userName = useSelector(getName);
  const avatarURL = useSelector(getAvatar);

  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userLogoModal, setUserLogoModal] = useState(false);
  const [userConfirmModal, setUserConfirmModal] = useState(false);

  const toggleLogoModal = () => {
    setUserLogoModal((prev) => !prev);
  };
  const toggleInfoModal = () => {
    setUserInfoModal((prev) => !prev);
  };
  const toggleConfirmModal = () => {
    setUserConfirmModal((prev) => !prev);
  };

  return (
    <div className="flex-grow flex justify-end">
      <div
        className="flex items-center cursor-pointer font-medium text-base md:text-lg"
        onClick={toggleLogoModal}
      >
        <img
          alt="User's avatar"
          src={avatarURL}
          className="inline-block bg-green-500 rounded-full w-9 h-9 md:w-12 md:h-12 object-cover mr-3 md:mr-4"
        />
        <p className="text-gray-500">{userName}Olena</p>
      </div>
      {userLogoModal && (
        <Modal toggleModal={toggleLogoModal}>
          <UserLogoModal
            toggleLogoModal={toggleLogoModal}
            toggleInfoModal={toggleInfoModal}
            toggleConfirmModal={toggleConfirmModal}
          />
        </Modal>
      )}
      {userInfoModal && (
        <Modal toggleModal={toggleInfoModal}>
          <UserInfoModal toggleInfoModal={toggleInfoModal} />
        </Modal>
      )}
      {userConfirmModal && (
        <Modal toggleModal={toggleConfirmModal}>
          <UserConfirmModal toggleConfirmModal={toggleConfirmModal} />
        </Modal>
      )}
    </div>
  );
};







// import React, { useState } from "react";
// import { UserAvatar } from './UserAvatar';
// import { UserName } from './UserName';
// import { UserLogoModal } from './UserLogoModal';
// // import { LogoutBtn } from './LogoutBtn';

// export const UserLogo = () => {
//   const [showModal, setShowModal] = useState(false);
//   const handleUserLogoClick = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };


//   return (
//     <div >
//       <div onClick={handleUserLogoClick}>
//         <UserAvatar />
//         <UserName />
//       {showModal && (
//           <UserLogoModal onClose={handleModalClose} />
//       )}
//       </div>
//     </div>
//   );
// };