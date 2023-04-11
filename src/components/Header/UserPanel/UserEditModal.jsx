import { useDispatch } from 'react-redux';
import { ModalTW } from 'components/ModalTW';
import { useState } from 'react';
import { edit } from 'redux/auth/authOperations';
import { AiOutlineUser, AiOutlineReload } from 'react-icons/ai';
import { Button } from 'components/Button/Button';
import { ReactComponent as Svg } from '../../../images/svg/crossSvg.svg';

const UserEditModal = ({ isOpen, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(null);
  const dispatch = useDispatch();

  const clearExit = () => {
    setSelectedFile(null);
    setBackgroundImage(null);
    setName('');
    handleClose();
  };

  const onFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = function (event) {
      setBackgroundImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('name', name);
    dispatch(edit(formData));
    clearExit();
  };
  const onNameInputChange = e => setName(e.target.value);
  return (
    <ModalTW isOpen={isOpen} handleClose={clearExit} backdrop="grey">
      <div className="flex justify-end mt-6 mr-6">
        <button
          className="flex text-xl "
          onClick={() => {
            clearExit();
          }}
        >
          <Svg />
        </button>
      </div>
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4 min-w-[290px] md:min-w-[500px] dark:bg-accentGray"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-row-reverse">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          ></label>
          <div className="flex items-center justify-center w-full mb-[54px]">
            <label
              className="flex  flex-col border-1 border-solid w-50 h-50 hover:bg-gray-100 hover:border-gray-300 group"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                borderRadius: '50%',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex relative items-center justify-center  w-20 h-20 ">
                {selectedFile && (
                  <AiOutlineReload
                    size={48}
                    className="text-white opacity-75 "
                  />
                )}
                {!selectedFile && (
                  <div className="transition duration-300 hover:bg-transparent hover:animate-pulse  bg-[#D9D9D9] rounded-full p-5 dark:bg-accentHalfDark hover:cursor-pointer  hover:scale-120">
                    <AiOutlineUser className="dark:text-white" size={48} />
                  </div>
                )}
              </div>
              <div className=" fixed bottom-[58%] right-[42%] w-6 h-6 bg-accentMain hover:cursor-pointer rounded-full">
                <p className="flex text-center text-white justify-center">+</p>
              </div>

              <input
                type="file"
                className="hidden "
                id="photo"
                onChange={onFileChange}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          ></label>

          <input
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-accentGray "
            id="name"
            type="text"
            placeholder="Username"
            onChange={onNameInputChange}
            value={name}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            cssClass={
              'logout-btn w-full dark:bg-accentHalfDark dark:hover:bg-accentDark dark:text-accentGray dark:hover:text-white'
            }
            type="submit"
            text="Save changes"
          ></Button>
        </div>
      </form>
    </ModalTW>
  );
};

export { UserEditModal };
