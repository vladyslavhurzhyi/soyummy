import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  });

  const closeModal = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const backdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50" onClick={backdropClick}>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto my-12">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

