import { ModalTW } from 'components/ModalTW';
import TeamMember from './TeamMember';
import { ReactComponent as Svg } from 'images/svg/crossSvg.svg';

const TeamModal = ({ isOpen, handleClose }) => {
  const clearExit = () => handleClose();
  return (
    <ModalTW isOpen={isOpen} handleClose={clearExit} backdrop="grey">
      <div className="rounded px-8 pt-6 pb-8 min-[420px]:w-[390px] lg:w-[707px] xl:w-auto bg-white dark:bg-accentDark text-secondaryText dark:text-whiteText">
        <div className="flex justify-end">
          <button className="flex text-xl" onClick={clearExit}>
            <Svg className="stroke-secondaryText dark:stroke-whiteText" />
          </button>
        </div>
        <h2 className="mb-5 sm:mb-10 mt-4 sm:mt-0 text-center text-3xl font-extralight">
          Meet the <strong className="font-bold">team</strong>
        </h2>
        <div className="flex flex-col xl:flex-row gap-7 lg:gap-3 xl:gap-7">
          <div className="flex flex-col lg:flex-row xl:flex-col gap-7 lg:gap-3 xl:gap-7">
            <div className="flex flex-col md:justify-center md:flex-row gap-6 xl:gap-12 p-4 border-2 dark:border-accentMain rounded-3xl">
              <div>
                <h3 className="mb-4 text-center dark:text-accentMain">
                  Team Lead
                </h3>
                <TeamMember
                  name="Vlad H."
                  link="https://github.com/vladyslavhurzhyi"
                  photo="https://avatars.githubusercontent.com/u/80459886"
                />
              </div>
              <div>
                <h3 className="mb-4 text-center dark:text-accentMain">
                  Scrum Master
                </h3>
                <TeamMember
                  name="Serhii M."
                  link="https://github.com/masevik"
                  photo="https://avatars.githubusercontent.com/u/104005706"
                />
              </div>
            </div>
            <div className="p-4 border-2 dark:border-accentMain rounded-3xl">
              <h3 className="mb-4 text-center dark:text-accentMain">
                Backend Developers
              </h3>
              <div className="flex flex-col md:justify-center md:flex-row gap-6 xl:gap-12">
                <TeamMember
                  name="Vlad K."
                  link="https://github.com/vladkrasovsky"
                  photo="https://avatars.githubusercontent.com/u/12548011"
                />
                <TeamMember
                  name="Vitalii K."
                  link="https://github.com/vitalii-khymchuk"
                  photo="https://avatars.githubusercontent.com/u/103372377"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col lg:flex-wrap grow p-4 lg:px-0 xl:px-4 border-2 dark:border-accentMain rounded-3xl">
            <h3 className="mb-4 text-center dark:text-accentMain w-full">
              Frontend Developers
            </h3>
            <div className="flex flex-col md:justify-center md:flex-row md:flex-wrap gap-6 lg:w-3/6 xl:w-full xl:gap-12">
              <TeamMember
                name="Iryna M."
                link="https://github.com/IreneCreadora"
                photo="https://avatars.githubusercontent.com/u/105308268"
              />
              <TeamMember
                name="Olena B."
                link="https://github.com/elenbond"
                photo="https://avatars.githubusercontent.com/u/93439766"
              />
              <TeamMember
                name="Mykhailo H."
                link="https://github.com/MykhailoHordiienko"
                photo="https://avatars.githubusercontent.com/u/104730211"
              />
              <TeamMember
                name="Dmutriy H."
                link="https://github.com/Dmutriy"
                photo="https://avatars.githubusercontent.com/u/105307970"
              />
            </div>
            <div className="flex flex-col md:justify-center md:flex-row md:flex-wrap gap-6 lg:w-3/6 xl:w-full xl:gap-12 mt-6 lg:mt-0 xl:mt-auto">
              <TeamMember
                name="Valerii M."
                link="https://github.com/valerii-mykh"
                photo="https://avatars.githubusercontent.com/u/58910653"
              />
              <TeamMember
                name="Vadym K."
                link="https://github.com/Vadym-Khokhlov"
                photo="https://avatars.githubusercontent.com/u/75025818"
              />
              <TeamMember
                name="Max B."
                link="https://github.com/BogdanMU"
                photo="https://avatars.githubusercontent.com/u/104568558"
              />
              <TeamMember
                name="Sergey P."
                link="https://github.com/SergeyPochapskiy"
                photo="https://avatars.githubusercontent.com/u/104765308"
              />
            </div>
          </div>
        </div>
      </div>
    </ModalTW>
  );
};

export { TeamModal };
