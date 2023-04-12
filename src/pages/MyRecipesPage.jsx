import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';
import { Helmet } from 'react-helmet-async';

const MyRecipesPage = () => {
  return (
    <>
      <Helmet>
        <title>My recipes</title>
      </Helmet>
      <div className="container">
        <MainPageTitle
          pageTitle={'My recipes'}
          className={'main-title pb-[50px] md:pb-[72px]'}
        />
        <section className="bg-[#FAFAFA] dark:bg-accentDarker">
          <MyRecipesList cssClass="seerecipegreen-btn" />
        </section>
      </div>
    </>
  );
};

export default MyRecipesPage;
