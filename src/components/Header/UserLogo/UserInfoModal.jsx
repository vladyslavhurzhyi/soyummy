// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useAuth } from "hooks";
// import { updateUser } from "redux/auth/operations";
// import UserPreviewImg from "./UserPreviewImg";
// // import ButtonLoader from
// // import CloseButton from 
// import { InputLabel } from "@mui/material";
// // import { UpdateUserSchema } from "helpers/validations";
// // import { UserSvg, UserSvgBlack, EditSvg, PlusSvg } from 

// export const UserInfoModal = ({ toggleInfoModal }) => {
//   const {
//     user: { avatarURL, name },
//     isLoading,
//   } = useAuth();

//   const dispatch = useDispatch();
//   const [photo, setPhoto] = useState(avatarURL);
//   const [file, setFile] = useState(null);
//   const [nickname, setNickname] = useState(name);
//   const [errors, setErrors] = useState({});

//   const handleNicknameChange = (e) => {
//     setNickname(e.target.value);
//   };

//   const handlePhotoChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("avatar", photo);
//     formData.append("name", nickname);

//     if (file) {
//       formData.append("photo", file);
//     }

//     try {
//       await dispatch(updateUser(formData));
//       toggleInfoModal();
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.errors) {
//         setErrors(err.response.data.errors);
//       }
//     }
//   };

//   const getPhoto = (url) => {
//     setPhoto(url);
//   };

//   return (
//     <div className="fixed z-50 inset-0 overflow-y-auto">
//          <div className="flex items-center justify-center min-h-screen">
//             <div className="relative bg-white rounded-lg w-full max-w-md">
//                 <CloseButton toggleModal={toggleInfoModal} />

//                 <form onSubmit={handleSubmit}>
//                     <div className="p-6">
//                         <div className="flex justify-center">
//                             <div className="relative w-32 h-32 rounded-full overflow-hidden">
//                                 <UserPreviewImg
//                                     file={file}
//                                     avatarURL={avatarURL}
//                                     getPhoto={getPhoto}

//                                 <label htmlFor="photo">
//                                     <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full cursor-pointer">
//                                     <PlusSvg className="h-6 w-6 text-white" />
//                                     </div>

//                                     <input
//                                     className="hidden"
//                                     id="photo"
//                                     name="photo"
//                                     type="file"
//                                     onChange={handlePhotoChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className="mt-4">
//                                 <InputLabel htmlFor="nickname">
//                                 <UserSvgBlack className="h-6 w-6 text-black" />
//                                 <EditSvg className="h-6 w-6 text-blue-500" />
//                                 <input
//                                     id="nickname"
//                                     name="nickname"
//                                     type="text"
//                                     className="border-b-2 border-gray-300 outline-none focus:border-blue-500 py-2 w-full"
//                                     value={nickname}
//                                     onChange={handleNicknameChange}
//                                     />
//                                     </InputLabel>

//                                     {errors.nickname && (
//                                 <div className="text-red-500 text-sm">{errors.nickname}</div>
//                             )
//                         }
//                         </div>
//                     </div>
//                  </form>
//             </div>
//         </div>
//     </div>





