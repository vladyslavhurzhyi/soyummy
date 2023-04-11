import { Logo } from 'components/Logo/Logo';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Glass } from '../../images/svg/search-icon.svg';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';

const activeLinkGradient =
  'text-transparent bg-clip-text bg-gradient-to-r from-black to-black via-accentMain animate-gradient-x';

export const MobMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <div className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span class="block w-8 h-0.5 bg-accentDark dark:bg-whiteText animate-pulse"></span>
            <span class="block w-8 h-0.5 bg-accentDark dark:bg-whiteText animate-pulse"></span>
            <span class="block w-5 h-0.5 bg-accentDark dark:bg-whiteText animate-pulse"></span>
          </div>

          <div
            className={`${
              isNavOpen ? 'showMenuNav' : 'hideMenuNav'
            } bg-accentLighter dark:bg-accentDarker bg-mob_menu_leaf md:bg-tablet_mob_menu_leaf bg-no-repeat bg-right-bottom`}
          >
            <div className="CROSS-ICON absolute w-full top-0 px-4 pt-[22px] flex items-center justify-between">
              <Logo />
              <button type="button" onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-8 w-8 text-accentDark dark:text-whiteText"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
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
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
		overflow: hidden;

        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
