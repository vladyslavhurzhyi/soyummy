import { NavLink } from 'react-router-dom';
import { ReactComponent as Glass } from '../../images/svg/search-icon.svg';

const activeLinkGradient =
  'text-transparent bg-clip-text bg-gradient-to-r from-black to-black via-accentMain animate-gradient-x';

export const Navigation = () => {
  return (
    <nav className="hidden lg:block lg:ml-10 xl:ml-48">
      <ul className="flex justify-center items-center gap-8 lg:gap-6 font-main font-medium text-[18px] lg:text-[14px] leading-[18px] md:leading-[22px] tracking-[-0.02em] text-accentDark dark:text-whiteText">
        <li className="hover:text-accentMain focus:text-accentMain">
          <NavLink
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
            className={({ isActive }) =>
              isActive ? 'animate-pulse' : undefined
            }
            to="/search"
          >
            <Glass className="stroke-accentDark dark:stroke-whiteText w-5 h-5 " />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
