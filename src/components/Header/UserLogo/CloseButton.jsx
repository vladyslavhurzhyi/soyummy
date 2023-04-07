import { ReactComponent as CloseMenuIcon } from "./../images/closeMenuIcon.svg";

export const CloseButton = ({ toggleModal }) => {
  return (
    <button
      className="absolute z-10 top-5 right-5 border-none bg-transparent cursor-pointer stroke-current"
      onClick={() => {
        toggleModal();
      }}
    >
      <CloseMenuIcon />
    </button>
  );
};

