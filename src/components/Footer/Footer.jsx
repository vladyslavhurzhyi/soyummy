import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Logo } from 'components/Logo/Logo';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { TeamModal } from './TeamModal';
import { ReactComponent as Svg } from './images/elipse.svg';

export const Footer = () => {
  const [teamModal, setTeamModal] = useState(false);

  const openModal = modalName => {
    switch (modalName) {
      case 'teamModal':
        setTeamModal(true);
        break;
      default:
        return;
    }
  };

  const closeModals = () => {
    setTeamModal(false);
  };

  return (
    <footer className="before:bg-main_container_mob_leaf md:before:bg-main_container_tab_leaf xl:before:bg-main_container_desc_leaf before:bg-no-repeat before:bg-[left_0_bottom_-240px] md:before:bg-[left_0_bottom_-370px] xl:before:bg-[left_0_bottom_-515px] before:content-[''] before:block before:m-0 before:w-full before:h-[120px] md:before:h-[215px] xl:before:h-[255px] z-0 relative w-full">
      <div className="flex justify-center items-center flex-col bg-accentDark dark:bg-accentMain pt-[28px] pb-[18px] md:pt-[50px] md:pb-[24px] xl:pt-[64px] xl:pb-[50px] ">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-start md:justify-center lg:justify-between w-full">
            <div className="flex justify-center md:justify-between">
              <div className="flex flex-col mr-0 lg:mr-[0px] items-start justify-center">
                <div className="flex items-center justify-center mb-[40px]">
                  <Logo
                    cssClassIcon="iconLogoFooterMob"
                    cssClassDiv="divIconFooterMob"
                  />
                  <h2 className="text-[18px]/[18px] md:text-[28px]/[28px] ml-[12px] font-bold text-whiteText">
                    So Yummy
                  </h2>
                </div>
                <ul className="hidden md:block lg:block lg:min-w-[380px] lg:max-w-[430px]">
                  <li className="flex flex-row justify-start items-center ml-[10px]">
                    <Svg alt="elipse"></Svg>
                    <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px] font-normal text-whiteText">
                      Database of recipes that can be replenished
                    </p>
                  </li>
                  <li className="mt-3 flex flex-row justify-start items-start ml-[10px]">
                    <Svg
                      alt="elipse"
                      className="mt-[9px] w-[4.8px] h-[4.5px]"
                    ></Svg>
                    <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px] font-normal text-whiteText">
                      Flexible search for desired and unwanted ingredients
                    </p>
                  </li>
                  <li className="mt-3 flex flex-row justify-start items-center ml-[10px]">
                    <Svg alt="elipse"></Svg>
                    <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px] font-normal text-whiteText">
                      Ability to add your own recipes with photos
                    </p>
                  </li>
                  <li className="mt-3 flex flex-row justify-start items-center ml-[10px]">
                    <Svg alt="elipse"></Svg>
                    <p className="md:text-[14px]/[18px] xl:text-[18px]/[24px] ml-[10px] font-normal text-whiteText">
                      Convenient and easy to use
                    </p>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block lg:hidden">
                <Nav />
              </div>
            </div>
            <div className="flex justify-center lg:hidden w-full md:mt-[72px]">
              <Navigation />
            </div>
            <div className="hidden lg:flex">
              <Navigation />
            </div>
            <div className="hidden lg:flex">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden py-5 md:py-8 xl:py-[50px]">
        <div className="container flex flex-wrap gap-y-4 md:gap-y-6 justify-center items-center relative z-10 text-[10px]/[10px] md:text-[14px]/[14px]">
          <p className="font-medium text-accentDark dark:text-whiteText opacity-50">
            &copy; 2023 All Rights Reserved.
          </p>

          <NavLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="/"
            className="ml-[14px] md:ml-[28px] xl:ml-[40px] font-normal text-accentDark hover:text-accentMain focus:text-accentMain dark:text-whiteText dark:hover:text-accentMain dark:focus:text-accentMain opacity-60 hover:opacity-100 transition-colorOpacity duration-500"
          >
            Terms of Service
          </NavLink>

          <button
            onClick={() => openModal('teamModal')}
            type="button"
            className="w-full md:w-auto mx-auto md:ml-[28px] xl:ml-[40px] opacity-60 text-accentDark hover:text-accentMain hover:opacity-100 dark:text-whiteText transition-colorOpacity duration-500"
          >
            Developed with{' '}
            <span className="inline-block scale-x-125 text-accentMain animate-pulse">
              &hearts;
            </span>{' '}
            by GoITStudents
          </button>

          <TeamModal
            isOpen={teamModal}
            handleClose={closeModals}
            handleOpen={openModal}
          />
        </div>
        <div className="pointer-events-none blur-sm absolute right-[-20px] bottom-[-40px] md:right-[-10px] md:bottom-[-105px] xl:right-[0px] xl:bottom-[-150px] z-100 -rotate-[24deg]">
          <img
            src={require('images/leafs.webp')}
            loading="lazy"
            alt="leafs"
            className="w-[190px] h-[172px] md:w-[328px] md:h-[314px] xl:w-[488px] xl:h-[474px]"
          />
        </div>
      </div>
    </footer>
  );
};
