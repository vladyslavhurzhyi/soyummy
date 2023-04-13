import { Helmet } from 'react-helmet-async';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

const ShoppingListPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Shopping list</title>
      </Helmet>
      <MainPageTitle
        pageTitle={'Shopping list'}
        className={'main-title pb-[50px] md:pb-[72px]'}
      />
      <section className="dark:bg-accentDarker relative z-10">
        <div className=" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px]">
          <IngredientsShoppingList />
        </div>
      </section>
    </div>
  );
};

export default ShoppingListPage;
