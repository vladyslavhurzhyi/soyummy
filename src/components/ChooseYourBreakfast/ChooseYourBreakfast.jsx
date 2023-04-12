import { NavLink } from 'react-router-dom';
import spoon from 'images/spoon.png';
import arrow from 'images/arrow.png';
export const ChooseYourBreakfast = () => {
  return (
    <div className="relative w-full z-0 mx-auto">
      <img
        src={spoon}
        alt=""
        className="absolute z-0 bottom-[110px] left-0 right-0 mx-auto md:mr-0 md:bottom-[-10px] md:right-[-40px] xl:bottom-[-90px] xl:right-[70px] w-[320px] h-[300px] md:w-[378px] md:h-[350px] xl:w-[578px] xl:h-[539px]"
      />
      <img
        src={arrow}
        alt=""
        className="absolute z-0 bottom-[80px] left-0 right-0 mx-auto md:mr-0 md:bottom-[-45px] md:right-[25px] xl:bottom-[-130px] xl:right-[50px] w-[180px] h-[100px] md:w-[180px] md:h-[100px] xl:w-[220px] xl:h-[170px]"
      />
      <div className="absolute bottom-[115px] left-0 right-0 mx-auto md:mr-0 md:bottom-[25px] md:right-0 xl:bottom-1 xl:right-0  w-[298px] md:w-[261px] md:h-[100px] h-28 bg-white rounded-lg p-2 leading-5 text-secondaryText mb-8 md:mb-0 md:flex justify-between flex-col dark:bg-accentDark">
        <p className="font-main font-medium text-sm tracking-tight dark:text-whiteText">
          <span className="text-accentMain ">Delicious and healthy </span>
          way to enjoy a variety of fresh ingredients in one satisfying meal
        </p>
        <NavLink
          to="/categories/breakfast"
          className="text-[10px] tracking-[0.2px] flex justify-end items-center hover:text-accentMain dark:text-whiteText"
        >
          See recipes{' '}
          <svg
            className="w-4 h-3 ml-1 flex"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-current"
              d="M1.5 6H13.5M13.5 6L9 1.5M13.5 6L9 10.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};
