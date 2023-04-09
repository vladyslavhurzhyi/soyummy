import { useDispatch } from 'react-redux';
import { ModalTW } from 'components/ModalTW';
import { logOut } from 'redux/auth/authOperations';
import { CloseButton } from './CloseButton';

export const UserLogoutModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => dispatch(logOut());

  return (
    <ModalTW isOpen={isOpen} handleClose={handleClose} backdrop="blur">
      <div className="fixed z-50 w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4 sm:mx-0 animate-fade-in-down">
          <p className="text-lg font-medium mb-4">
            Are you sure you want to log out?
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleLogoutButtonClick}
            >
              Confirm
            </button>
          </div>
          <CloseButton toggleModal={handleClose} />
        </div>
      </div>
    </ModalTW>
  );
};
