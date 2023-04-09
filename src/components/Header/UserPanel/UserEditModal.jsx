import { useDispatch } from 'react-redux';
import { ModalTW } from 'components/ModalTW';
import { useState } from 'react';
import { edit } from 'redux/auth/authOperations';
import { AiOutlineUser, AiOutlineReload } from 'react-icons/ai';

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
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            Upload a photo
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              className="flex flex-col border-1 border-solid w-50 h-50 hover:bg-gray-100 hover:border-gray-300 group"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                borderRadius: '50%',
                backgroundPosition: 'center',
              }}
            >
              <div
                className="flex  items-center justify-center"
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedFile && (
                  <AiOutlineReload
                    size={48}
                    style={{ opacity: '75%', color: 'white' }}
                  />
                )}
                {!selectedFile && <AiOutlineUser size={48} />}
              </div>
              <input
                type="file"
                className="hidden"
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
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Username"
            onChange={onNameInputChange}
            value={name}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </ModalTW>
  );
};

export { UserEditModal };
