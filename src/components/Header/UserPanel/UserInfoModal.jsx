import React from 'react';
import { ModalTW } from 'components/ModalTW';
// import { ReactComponent as EditPen } from './../images/editPen.svg';
// import { ReactComponent as UserArrow } from './../images/arrow-right.svg';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { ReactComponent as EditIcon } from '../images/editPen.svg';

export const UserInfoModal = ({ isOpen, handleClose, handleOpen }) => {
  const onEditBtnClick = () => handleOpen('userEdit');
  const onLogoutBtnClick = () => handleOpen('userLogout');

  return (
    <ModalTW isOpen={isOpen} handleClose={handleClose}>
      <div className="flex p-4 min-w-[161px] min-h-[130px] md:min-w-[173px] md:min-h-[134px] flex-col items-center dark:bg-accentGray">
        <button
          onClick={onEditBtnClick}
          className="flex px-4 py-2 mb-[32px] items-center"
        >
          <span className="text-#23262A font-normal mr-[54px] ">
            Edit profile
          </span>
          <EditIcon className="w-[12px] h-[12px]  " />
        </button>
        <CurveBtn
          text="Log out"
          onClick={onLogoutBtnClick}
          cssClass="addbgreen-btn"
        />
      </div>
    </ModalTW>
  );
};
