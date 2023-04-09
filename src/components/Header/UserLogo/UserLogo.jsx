import { useState } from "react";
import { Modal } from "./Modal";
import { UserLogoModal } from "./UserLogoModal"
import { UserInfoModal } from "./UserInfoModal";
import { UserConfirmModal } from "./UserConfirmModal";
import { UserAvatar } from './UserAvatar';
import { UserName }  from './UserName';

export const UserLogo = () => {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userLogoModal, setUserLogoModal] = useState(false);
  const [userConfirmModal, setUserConfirmModal] = useState(false);

  const toggleLogoModal = () => {
    setUserLogoModal(!userLogoModal);
  };
  const toggleInfoModal = () => {
    setUserInfoModal(!userInfoModal);
  };

  const toggleConfirmModal = () => {
    setUserConfirmModal(!userConfirmModal);
  };
 

return (
    <div className="flex-grow-1 flex justify-end">
      <div onClick={toggleLogoModal} className="flex items-center cursor-pointer font-semibold text-sm md:text-base mr-4 md:mr-8">
        <UserAvatar />
        <UserName />
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




  // return (
  //   <div className="flex-grow-1 flex justify-end">
  //     <div onClick={toggleLogoModal} className="flex items-center cursor-pointer font-semibold text-sm md:text-base mr-4 md:mr-8">
  //       <UserAvatar />
  //       <UserName />
  //     </div>
  //     {userLogoModal && (
  //       <Modal toggleModal={toggleLogoModal}>
  //         <UserLogoModal
  //           toggleLogoModal={toggleLogoModal}
  //           toggleInfoModal={toggleInfoModal}
  //           toggleConfirmModal={toggleConfirmModal}
  //         />
  //       </Modal>
  //     )}
  //     {userInfoModal && (
  //       <Modal toggleModal={toggleInfoModal}>
  //         <UserInfoModal toggleInfoModal={toggleInfoModal} />
  //       </Modal>
  //     )}

  //     {userConfirmModal && (
  //       <Modal toggleModal={toggleConfirmModal}>
  //         <UserConfirmModal toggleConfirmModal={toggleConfirmModal} />
  //       </Modal>
  //     )}
  //   </div>
  // );
};

