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
    <div className="fixed; top: 0; left: 0; width: 100vw; height: 100vh;" onClick={backdropClick}>
      <div className="width: auto; height: auto; flex items-center justify-center">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

