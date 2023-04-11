import { useDispatch } from 'react-redux';
import { ModalTW } from 'components/ModalTW';
import { logOut } from 'redux/auth/authOperations';
import { CloseButton } from './CloseButton';
import { Button } from 'components/Button/Button';

export const UserLogoutModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => dispatch(logOut());

  return (
    <ModalTW isOpen={isOpen} handleClose={handleClose} backdrop="blur">
      <div className="fixed z-50 w-full h-full top-0 left-0 flex items-center justify-center">
        <div className=" bg-white rounded-lg shadow-lg p-8 mx-4 sm:mx-0 animate-fade-in-down">
          <button
            className="flex w-2 h-2 text-xl"
            onClick={() => {
              handleClose();
            }}
          >
            x
          </button>
          <p className="text-lg font-medium mb-4">
            Are you sure you want to log out?
          </p>
          <div className="flex justify-end space-x-4">
            <Button
              cssClass={'logout-btn'}
              onClick={handleClose}
              text="Log Out"
            >
              Log Out
            </Button>
            <Button
              cssClass={'cancel-btn'}
              onClick={handleLogoutButtonClick}
              text="Cancel"
            >
              Cancel
            </Button>
          </div>
          <CloseButton toggleModal={handleClose} />
        </div>
      </div>
    </ModalTW>
  );
};
