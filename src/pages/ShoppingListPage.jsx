import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
      <section className="dark:bg-accentDarker">
        <div className=" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px] pb-24 md:pb-48">
          <IngredientsShoppingList />
        </div>
      </section>
    </div>
  );
};

export default ShoppingListPage;
