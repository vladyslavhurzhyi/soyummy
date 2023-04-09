import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';

const MyRecipesPage = () => {
  return (
    <>
      <div className="container">
        <MainPageTitle
          pageTitle={'My recipes'}
          className={'main-title mb-[72px] md:mb-[100px] px-4 md:px-8 xl:px-24'}
        />
        <section className="bg-[#FAFAFA]">
          <MyRecipesList cssClass="seerecipegreen-btn" />
        </section>
      </div>
    </>
  );
};

export default MyRecipesPage;
