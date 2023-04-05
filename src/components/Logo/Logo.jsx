//cssClassIcon="iconLogo" cssClassDiv="divIconLogo"
//cssClass for trash - "iconTrash", cssClassDiv = "divIconTrash"
import logo from './logosvg.svg';

export const Logo = ({
  newLogo = logo,
  cssClassIcon = 'iconLogo',
  cssClassDiv = 'divIconLogo',
}) => {
  return (
    <>
      <div className={cssClassDiv}>
        <img src={newLogo} alt="logo" className={cssClassIcon}></img>
      </div>
    </>
  );
};
