import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

export const RecipePageHero = () => {
  return (
    <>
      <div className="flex bg-recipePage w-full py-56 justify-center gap-4 bg-cover bg-center bg-no-repeat"></div>
      <MainPageTitle
        pageTitle="Salmon Avocado Salad" // var from id
        className="main-title-accent mb-[18px] md:mb-[100px] px-4 md:px-8 xl:px-24 mx-auto"
      />
    </>
  );
};
