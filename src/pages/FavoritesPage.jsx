import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

const FavoritesPage = () => {
  return (
    <>
      <div className="container">
        <MainPageTitle
          pageTitle={'Favorites'}
          className={'main-title mb-[72px] md:mb-[100px] px-4 md:px-8 xl:px-24'}
        />
        <section className="bg-[#FAFAFA]">
          <FavoriteList />
        </section>
      </div>
    </>
  );
};

export default FavoritesPage;
