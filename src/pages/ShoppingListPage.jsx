import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import React from 'react';

const ShoppingListPage = () => {
  return (
    <>
      <MainPageTitle
        pageTitle={'Shopping list'}
        className={'main-title mb-[72px] md:mb-[100px] px-4 md:px-8 xl:px-24'}
      />
      <section className="bg-[#FAFAFA]">
        <div className=" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px]">
          <IngredientsShoppingList />
        </div>
      </section>
    </>
  );
};

export default ShoppingListPage;
