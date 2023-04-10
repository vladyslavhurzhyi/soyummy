import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

const FavoritesPage = () => {
  return (
    <>
      <div className="container">
        <MainPageTitle
          pageTitle={'Favorites'}
          className={'main-title pb-[50px] md:pb-[72px] px-4 md:px-8 xl:px-24'}
        />
        <section className="bg-[#FAFAFA] dark:bg-accentDarker">
          <div className=" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px]">
            <FavoriteList />
          </div>
        </section>
      </div>
    </>
  );
};

export default FavoritesPage;
