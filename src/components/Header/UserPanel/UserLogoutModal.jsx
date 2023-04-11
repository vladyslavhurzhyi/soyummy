import { useDispatch } from 'react-redux';
import { ModalTW } from 'components/ModalTW';
import { logOut } from 'redux/auth/authOperations';
import { CloseButton } from './CloseButton';
import { Button } from 'components/Button/Button';
import { ReactComponent as Svg } from '../../../images/svg/crossSvg.svg';

export const UserLogoutModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => dispatch(logOut());

  return (
    <ModalTW isOpen={isOpen} handleClose={handleClose} backdrop="blur">
      <div className="z-50 max-w-[300px] max-h-[200px] md:max-w-full  md:top-0 md:left-0 flex items-center text-center  justify-center">
        <div className="  bg-white rounded-lg shadow-lg p-8 animate-fade-in-down dark:bg-accentGray ">
          <div className="flex justify-end">
            <button
              className="block  hover:scale-105 transition duration-200"
              onClick={() => {
                handleClose();
              }}
            >
              <Svg />
            </button>
          </div>

          <p className="text-lg font-medium mb-8">
            Are you sure you want to log out?
          </p>

          <div className="flex items-center gap-[16px]">
            <Button
              cssClass={'logout-btn'}
              onClick={handleLogoutButtonClick}
              text="Log Out"
            >
              Log Out
            </Button>
            <Button
              cssClass={'cancel-btn '}
              onClick={handleClose}
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
