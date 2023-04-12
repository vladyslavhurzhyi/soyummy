//cssClassIcon="iconLogo" cssClassDiv="divIconLogo"
//cssClass for trash - "iconTrash", cssClassDiv = "divIconTrash"
//cssClass for mobile ---divIconFooterMob / iconLogoFooterMob
import { ReactComponent as Svg } from './logosvg.svg';
import { ReactComponent as SvgTrash } from '../../images/svg/trash.svg';
import { NavLink } from 'react-router-dom';

export const Logo = ({
  trash = false,
  cssClassIcon = 'iconLogo',
  cssClassDiv = 'divIconLogo',
}) => {
  return (
    <>
      <div className={cssClassDiv}>
        {trash ? (
          <SvgTrash alt="logo" className={cssClassIcon}></SvgTrash>
        ) : (
          <NavLink to="/">
            <Svg alt="logo" className={cssClassIcon}></Svg>
          </NavLink>
        )}
      </div>
    </>
  );
};
