import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ModalTW = ({ children, isOpen = false, handleClose, backdrop }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      {/* <Dialog as="div" className="relative z-10" onClose={handleClose}> */}
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen z-31">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {() => {
              switch (backdrop) {
                case 'blur':
                  return (
                    <div className="fixed mx-0  inset-0  bg-opacity-75 transition-opacity z-25" />
                  );
                case 'grey':
                  return (
                    <div className="fixed mx-0 inset-0 bg-opacity-75 transition-opacity z-25" />
                  );
                default:
                  return <div className="fixed inset-0 " />;
              }
            }}
          </Transition.Child>
          {/* <div className="fixed top-[10%] right-[5%]  mx-0 md:top-[10%] md:right-[10%] xl:top-[10%] xl:right-[25%]  2xl:top-[10%] 2xl:right-[30%]  z-40 overflow"> */}
          <div className="relative rounded-lg px-4 pt-5 pb-4 overflow-hidden  transform transition-all min-w-fit sm:max-w-lg sm:w-full sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl h-full bg-white text-left shadow-xl transition-all dark:bg-accentGray">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { ModalTW };
