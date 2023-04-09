// import { useDispatch, useSelector } from "react-redux";
// import { updateUser } from "redux/auth/operations";
import { useEffect} from "react";
// import { useAuth } from "hooks";
import { createPortal } from "react-dom";
import { BackdropUserLogo } from "./BackdropUserLogo";
import { ModalWindowUsereLogo } from "./ModalWindowUsereLogo";

// import CloseButton from 
// import { UserPreviewImg } from "./UserPreviewImg";
// import { Loader } from "components/Loader/Loader";
// import { UpdateUserSchema } from "helpers/validations";


const modalRoot = document.querySelector("#modal-info");

export const UserInfoModal = ({ children, toggleLogoModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
  toggleLogoModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
  toggleLogoModal();
    }
  };

// export const UserInfoModal = ({ toggleInfoModal }) => {
//   const {
//     user: { avatarURL },
//   } = useAuth();

//   const {
//     user: { name },
//     isLoading,
//   } = useAuth();
//   const dispatch = useDispatch();
//   const [photo, setPhoto] = useState(avatarURL);

//   const initialValues = {
//     file: null,
//     nickname: name,
//   };

//   const getPhoto = (url) => {
//     setPhoto(url);
//   };


  return createPortal (
    <BackdropUserLogo onClick={handleBackdropClick} className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-50">
      <ModalWindowUsereLogo className="bg-white p-4 w-[300px] h-[300px]  rounded-lg shadow-md">{children}
{/* //         <UserInfoModal></UserInfoModal>
//       Edit profile <EditIcon/>
//         <CurveBtn text="Log out" onClick={toggleLogoModal} cssClass="addbgreen-btn" /> */}
    </ModalWindowUsereLogo>
</BackdropUserLogo>,
modalRoot      
  );
}; 






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

