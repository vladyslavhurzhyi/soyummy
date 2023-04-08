import { useState } from 'react';
import { Modal } from './Modal';
import { UserLogoModal } from './UserLogoModal';
import { UserInfoModal } from './UserInfoModal';
import { UserConfirmModal } from './UserConfirmModal';
import { getUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const UserPanel = () => {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userLogoModal, setUserLogoModal] = useState(false);
  const [userConfirmModal, setUserConfirmModal] = useState(false);

  const { name, email, avatarUrl } = useSelector(getUser);
  console.log(useSelector(getUser));
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
      <div
        onClick={toggleLogoModal}
        className="flex items-center cursor-pointer font-semibold text-sm md:text-base mr-4 md:mr-8"
      >
        <div className="px-4">{name}</div>
        <img src={avatarUrl} alt={`User avatar of ${name}`} />
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
