import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';

const MyRecipesPage = () => {
  return (
    <>
      <div className="container">
        <MainPageTitle
          pageTitle={'My recipes'}
          className={'main-title pb-[50px] md:pb-[72px] px-4 md:px-8 xl:px-24'}
        />
        <section className="bg-[#FAFAFA] dark:bg-accentDarker">
          <div className=" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px]">
            <MyRecipesList cssClass="seerecipegreen-btn" />
          </div>
        </section>
      </div>
    </>
  );
};

export default MyRecipesPage;
