import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ModalTW = ({ children, isOpen = false, handleClose, backdrop }) => {
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
          {() => {
            switch (backdrop) {
              case 'blur':
                return (
                  <div className="fixed inset-0 backdrop-blur-sm backdrop-filter bg-opacity-75 transition-opacity z-30" />
                );
              case 'grey':
                return (
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-30" />
                );
              default:
                return <div className="fixed inset-0 backdrop-blur-sm" />;
            }
          }}
        </Transition.Child>

        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex  mt-[78px] items-end justify-end p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative min-h-[327px] min-w-[330px] transform overflow-hidden rounded-3xl h-full bg-white text-left shadow-xl transition-all">
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
