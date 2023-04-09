import { CurveBtn } from "components/CurveBtn/CurveBtn";
import { ReactComponent as CloseMenuIcon } from "./../images/closeMenuIcon.svg";

export const CloseButton = ({ toggleModal, text, cssClass }) => {
  return (
    <CurveBtn
      text={text}
      // className="absolute z-10 top-5 right-5 border-none bg-transparent cursor-pointer stroke-current"
      cssClass={cssClass}
      onClick={() => {
        toggleModal();
      }}
    >
      <CloseMenuIcon />
    </CurveBtn>
  );
};

