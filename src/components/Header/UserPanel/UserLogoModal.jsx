import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BackdropUserLogo } from "./BackdropUserLogo";
import { ModalWindowUsereLogo } from "./ModalWindowUsereLogo";


const modalRoot = document.querySelector("#modal-root");
export const UserLogoModal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
<BackdropUserLogo onClick={handleBackdropClick} className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-50">
<ModalWindowUsereLogo className="bg-white p-4 rounded-lg shadow-md">{children}</ModalWindowUsereLogo>
</BackdropUserLogo>,
modalRoot
);
};







// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { UserInfoModal } from "./UserInfoModal";

// export const UserLogoModal = () => {
//   const [showUserInfoModal, setShowUserInfoModal] = useState(false);

//   const handleEditProfile = () => {
//     setShowUserInfoModal(true);
//   };

//   const handleLogout = () => {
//     // выполнить логаут пользователя
//   };

//   return (
//     <>
//       <Modal show={showUserInfoModal} onHide={() => setShowUserInfoModal(false)}>
//         <UserInfoModal/>
//       </Modal>
//       <Button variant="primary" onClick={handleEditProfile}>EditProfile</Button>
//       <Button variant="secondary" onClick={handleLogout}>Logout</Button>
//     </>
//   );
// }
