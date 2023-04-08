import { useState } from 'react';
import { UserInfoModal } from './UserInfoModal';
import { UserLogoutModal } from './UserLogoutModal';
import { UserEditModal } from './UserEdit';
import { getUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const UserPanel = () => {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userEditModal, setUserEditModal] = useState(false);
  const [userLogoutModal, setUserLogoutModal] = useState(false);

  const { name, avatarUrl } = useSelector(getUser);

  const openModal = modalName => {
    switch (modalName) {
      case 'userInfo':
        setUserInfoModal(true);
        setUserEditModal(false);
        setUserLogoutModal(false);
        break;
      case 'userEdit':
        setUserInfoModal(false);
        setUserEditModal(true);
        setUserLogoutModal(false);
        break;
      case 'userLogout':
        setUserInfoModal(false);
        setUserEditModal(false);
        setUserLogoutModal(true);
        break;
    }
  };

  const closeModals = () => {
    setUserInfoModal(false);
    setUserEditModal(false);
    setUserLogoutModal(false);
  };

  const onUserBtnClick = () => openModal('userInfo');
  console.log(useSelector(getUser));
  return (
    <div className="flex-grow-1 flex justify-end">
      <div
        onClick={onUserBtnClick}
        className="flex items-center cursor-pointer font-semibold text-sm md:text-base mr-4 md:mr-8"
      >
        <div className="px-4">{name}</div>
        <img
          src={avatarUrl}
          alt={`User avatar of ${name}`}
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
      </div>
      <UserInfoModal
        isOpen={userInfoModal}
        handleClose={closeModals}
        handleOpen={openModal}
      />
      <UserLogoutModal
        isOpen={userLogoutModal}
        handleClose={closeModals}
        handleOpen={openModal}
      />
      <UserEditModal
        isOpen={userEditModal}
        handleClose={closeModals}
        handleOpen={openModal}
      />
    </div>
  );
};
