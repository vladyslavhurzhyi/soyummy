import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="flax justify-center items-center mim-w-md my-8 m-auto">
      <NavLink
        className="transition duration-300 py-2 px-5 ml-2  rounded-tr-3xl rounded-br-lg rounded-bl-3xl rounded-tl-lg border font-main text-zinc-50 text-base bg-accentMain hover:bg-accentDark  focus:ring"
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className="transition duration-300 py-2 px-5 ml-2  rounded-tr-3xl rounded-br-lg rounded-bl-3xl rounded-tl-lg border font-main text-zinc-50 text-base bg-transporent hover:bg-accentDark  focus:ring"
        to="/signin"
      >
        Sign in
      </NavLink>
    </div>
  );
};
