import React from 'react';
import { ModalTW } from './ModalTW';
import { ReactComponent as EditPen } from './../images/editPen.svg';
import { ReactComponent as UserArrow } from './../images/arrow-right.svg';

export const UserInfoModal = ({ isOpen, handleClose, handleOpen }) => {
  const onEditBtnClick = () => handleOpen('userEdit');
  const onLogoutBtnClick = () => handleOpen('userLogout');

  return (
    <ModalTW isOpen={isOpen} handleClose={handleClose} backdrop="grey">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="p-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <button
            type="button"
            onClick={onEditBtnClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <span style={{ marginRight: '10px' }}>Edit profile</span>
            <EditPen />
          </button>
          <button type="button" onClick={onLogoutBtnClick}>
            Logout
            <UserArrow />
          </button>
        </div>
      </div>
    </ModalTW>
  );
};

// import React from 'react';

// import { LogoutBtn } from './LogoutBtn';
// import { ReactComponent as EditPen } from './../images/editPen.svg';
// import { ReactComponent as UserArrow } from './../images/arrow-right.svg';

// export const UserInfoModal = ({ closeModal, openEdit, openConfirm, container }) => {
//   const rect = container.getBoundingClientRect();
//   const viewportWidth = window.innerWidth;
//   const style = {
//     top: `${Math.round(rect.bottom + 15)}px`,
//     right: `${Math.round(viewportWidth - rect.right)}px`,
//   };
//   const handleEditBtnClick = () => {
//     closeModal();
//     openEdit();
//   };
//   const handleLogOutBtnClick = () => {
//     closeModal();
//     openConfirm();
//   };
//   return (
//     <div style={style} className="">
//       <button onClick={handleEditBtnClick} className="">
//         <span className="">Edit profile</span>
//         <EditPen className="" />
//       </button>

//       <div onClick={handleLogOutBtnClick} className="">
//         <LogoutBtn typeBtn="submit" title={'Log out'}>
//           <UserArrow/>
//         </LogoutBtn>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { useAuth } from "hooks";
// import { ReactComponent as EditPen } from './../images/editPen.svg';
// import { getAvatar, getName } from 'redux/auth/authSelectors';

// // import { updateUser } from "redux/auth/operations";
// // import { UpdateUserSchema } from "helpers/validations";
// // import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";

// export const UserInfoModal = ({ toggleInfoModal }) => {
//   const {
//     user: { avatarURL },
//   } = getAvatar ();

//   const {
//     user: { name },
//     isLoading,
//   } = getName();
// //   const dispatch = useDispatch();
//   const [photo, setPhoto] = useState(avatarURL);
//   const [nickname, setNickname] = useState(name);

//   const handleNicknameChange = (event) => {
//     setNickname(event.target.value);
//   };

//   const handlePhotoChange = (event) => {
//     setPhoto(URL.createObjectURL(event.target.files[0]));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // dispatch(updateUser({ avatar: photo, name: nickname }));
//   };

//   return (
//     <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
//       <div className="bg-white rounded-lg p-8 w-full max-w-md">
//         <button className="absolute top-4 right-4" onClick={toggleInfoModal}>
//           {/* <CloseButton /> */}
//         </button>
//         <form onSubmit={handleSubmit}>
//           <div className="flex justify-center mb-8">
//             <div className="relative h-24 w-24 rounded-full overflow-hidden">
//               <img
//                 className="absolute top-0 left-0 h-full w-full object-cover"
//                 src={photo}
//                 alt="user avatar"
//               />
//               <label
//                 htmlFor="photo"
//                 className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center cursor-pointer text-white hover:bg-opacity-70 transition-all duration-200 ease-in-out"
//               >
//                 {/* <PlusSvg /> */}
//               </label>
//               <input
//                 type="file"
//                 id="photo"
//                 name="photo"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handlePhotoChange}
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//               <input
//                 type="text"
//                 id="nickname"
//                 name="nickname"
//                 placeholder="Enter nickname"
//                 value={nickname}
//                 onChange={handleNicknameChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-mainText"
//               />
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="bg-mainText text-white rounded-full py-2 px-6 hover:bg-opacity-70 transition-all duration-200 ease-in-out"
//             >
//               {isLoading ? (
//                 {/* <ButtonLoader color="white" width={25} /> */}
//               ) : (
//                 "Save changes"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
