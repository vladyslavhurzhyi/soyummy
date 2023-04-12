import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

const FavoritesPage = () => {
  return (
    <>
      <div className="container">
        <MainPageTitle
          pageTitle={'Favorites'}
          className={'main-title pb-[50px] md:pb-[72px]'}
        />
        <section className="bg-[#FAFAFA] dark:bg-accentDarker">
          <FavoriteList />
        </section>
      </div>
    </>
  );
};

export default FavoritesPage;
