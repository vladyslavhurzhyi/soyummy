import { Logo } from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Burger } from '../../images/svg/burgerMenu.svg';
import { ReactComponent as CloseBurger } from '../../images/svg/closeMenuIcon.svg';
import { ReactComponent as Glass } from '../../images/svg/search-icon.svg';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
import { useState } from 'react';

const activeLinkGradient =
  'text-transparent bg-clip-text bg-gradient-to-r from-black to-black via-accentMain animate-gradient-x';

const showMenuNav =
  'fixed w-full h-screen top-0 left-0 overflow-hidden z-30 flex flex-col justify-evenly items-center';

export const MobMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  isNavOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '');

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <div className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <Burger className="w-7 md:w-8 h-7 md:h-8 stroke-accentDark dark:stroke-whiteText md:dark:stroke-accentDark animate-pulse" />
          </div>

          <div
            className={`${
              isNavOpen ? showMenuNav : 'hidden'
            } bg-accentLighter dark:bg-accentDarker bg-mob_menu_leaf md:bg-tablet_mob_menu_leaf bg-no-repeat bg-right-bottom z-50 transition-colors duration-1000`}
          >
            <div className="CROSS-ICON absolute w-full top-0 px-4 pt-[22px] flex items-center justify-between">
              <Logo />
              <button type="button" onClick={() => setIsNavOpen(false)}>
                <CloseBurger className="w-8 h-8 md:w-9 md:h-9 stroke-accentDark dark:stroke-whiteText animate-pulse" />
              </button>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between gap-8 md:gap-10 font-main font-medium text-[18px] md:text-[24px] leading-[18px] md:leading-6 tracking-[-0.02em] text-accentDark dark:text-whiteText cursor-pointer">
              <li className="hover:text-accentMain focus:text-accentMain">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkGradient : undefined
                  }
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
              <li className="hover:text-accentMain focus:text-accentMain">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkGradient : undefined
                  }
                  to="/add"
                >
                  Add Recipe
                </NavLink>
              </li>
              <li className="hover:text-accentMain focus:text-accentMain">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkGradient : undefined
                  }
                  to="/my"
                >
                  My Recipes
                </NavLink>
              </li>
              <li className="hover:text-accentMain focus:text-accentMain">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkGradient : undefined
                  }
                  to="/favorite"
                >
                  Favorites
                </NavLink>
              </li>
              <li className="hover:text-accentMain focus:text-accentMain">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkGradient : undefined
                  }
                  to="/shopping-list"
                >
                  Shopping List
                </NavLink>
              </li>
              <li className="hover:text-accentMain focus:text-accentMain">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'animate-pulse' : undefined
                  }
                  to="/search"
                >
                  <div className="flex">
                    <Glass className="stroke-accentDark dark:stroke-whiteText w-5 h-5 " />
                    <p className="ml-3">Search</p>
                  </div>
                </NavLink>
              </li>
            </ul>
            <div className="absolute bottom-5 left-4">
              <ToggleButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
