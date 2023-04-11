import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { ReactComponent as EditIcon } from './../images/editPen.svg';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';

const modalRoot = document.querySelector('#modal-logo');

export const UserLogoModal = ({ onClose, editOpen, logOutOpen }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-transparentz-50">
      <div className="max-w-screen-lg h- w-full relative px-4 mx-auto md:max-w-screen-xl md:px-6">
        <div className="absolute bg-white rounded-md border  top-16 right-4 md:top-20">
          <div className="p-4">
            <button onClick={handleOverlayClick} className="flex px-4 py-2 ">
              <span className="text-#23262A font-normal mr-[54px] ">
                Edit profile
              </span>
              <EditIcon className="w-[12px] h-[12px] " />
            </button>
            <CurveBtn
              text="Log out"
              onClick={onClose}
              cssClass="addbgreen-btn"
            />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

// // import { CurveBtn } from "components/CurveBtn/CurveBtn";
// import { useEffect } from "react";
// import { createPortal } from "react-dom";
// // import { BackdropUserLogo } from "./BackdropUserLogo";
// // import { ModalWindowUsereLogo } from "./ModalWindowUsereLogo";
// // import { ReactComponent as EditIcon } from "./../images/editPen.svg";
// import { UserInfoModal } from "./UserInfoModal";

// const modalRoot = document.querySelector("#modal-root");
// export const UserLogoModal = ({ children, toggleLogoModal }) => {
//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   });

//   const handleKeyDown = (e) => {
//     if (e.code === "Escape") {
//   toggleLogoModal();
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) {
//   toggleLogoModal();
//     }
//   };

//   return createPortal(
//      <UserInfoModal onClick={handleBackdropClick}></UserInfoModal>,
// modalRoot
// );
// };

// {<BackdropUserLogo onClick={handleBackdropClick} className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-50">
//       <ModalWindowUsereLogo className="bg-white p-4 w-[300px] h-[300px]  rounded-lg shadow-md">{children}
//         <UserInfoModal></UserInfoModal>
//       Edit profile <EditIcon/>
//         <CurveBtn text="Log out" onClick={toggleLogoModal} cssClass="addbgreen-btn" />
//       </ModalWindowUsereLogo>
// </BackdropUserLogo>, }
