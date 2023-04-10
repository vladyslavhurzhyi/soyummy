import ErrorPlug from '../../images/gif/ErrorPlug.gif';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-6 p-2 md:p-10">
      <h2 className="dark:text-whiteText text-accentDark font-bold">
        Oops 😨 Something go's wrong ...
      </h2>
      <img src={ErrorPlug} alt="error plug" />
      <CurveBtn
        text={'Go Home'}
        cssClass={
          'othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring'
        }
      />
    </div>
  );
};
