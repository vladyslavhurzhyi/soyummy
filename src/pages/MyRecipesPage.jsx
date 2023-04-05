import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';

const MyRecipesPage = () => {
  return (
    <>
      <MainPageTitle
        pageTitle={'My recipes'}
        className={'main-title mb-[72px] md:mb-[100px] px-4 md:px-8 xl:px-24'}
      />
      <section className="bg-[#ECECEC]">
        <div className=" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px]">
          <MyRecipesList cssClass="seerecipegreen-btn" />
        </div>
      </section>
    </>
  );
};

export default MyRecipesPage;
