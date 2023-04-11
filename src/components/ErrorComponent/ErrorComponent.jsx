import { Link } from 'react-router-dom';
import ErrorPlug from '../../images/gif/ErrorPlug.gif';

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-6 p-2 md:p-10">
      <h2 className="dark:text-whiteText text-accentDark font-bold">
        Oops 😨 Something go's wrong ...
      </h2>
      <img src={ErrorPlug} alt="error plug" />
      <Link
        to="/main"
        replace={true}
        style={{
          borderRadius: '9% 23% 11% 21% / 26% 57% 34% 60%  ',
        }}
        className="othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring"
      >
        Go Home
      </Link>
    </div>
  );
};
