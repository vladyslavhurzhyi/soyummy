import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ModalTW = ({
  children,
  isOpen = false,
  handleClose,
  backdrop,
  position,
}) => {
  const backdropMarkup = backdrop => {
    switch (backdrop) {
      case 'blur':
        return (
          <div className="fixed mx-0 inset-0 bg-opacity-75 transition-opacity backdrop-blur-sm" />
        );
      case 'grey':
        return (
          <div className="fixed mx-0 inset-0 bg-opacity-75 bg-gray-500 transition-opacity" />
        );
      default:
        return <div className="fixed inset-0 " />;
    }
  };
  const positionStyles = position => {
    switch (position) {
      case 'center':
        return 'flex min-h-full items-center md:p-4 text-center justify-center p-0';
      case 'topRight':
        return 'fixed top-[10%] right-[5%] mx-0 md:top-[10%] md:right-[10%] xl:top-[10%] xl:right-[25%] 2xl:top-[10%] 2xl:right-[30%] z-40 overflow';
      default:
        return 'flex min-h-full items-center md:p-4 text-center justify-center p-0';
    }
  };
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {backdropMarkup(backdrop)}
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className={positionStyles(position)}>
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
