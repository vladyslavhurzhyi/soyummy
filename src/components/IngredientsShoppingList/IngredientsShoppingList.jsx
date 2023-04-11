// import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion, Reorder } from 'framer-motion';

import { EmptyShoppingList } from './EmptyShoppingList';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteShoppingListItem,
  fetchShoppingList,
} from 'redux/shoppingList/shoppingListOperations';
import {
  selectShoppingList,
  selectShoppingListIsError,
  selectShoppingListIsLoading,
} from 'redux/shoppingList/shoppingListSelector';
import { IngredientsShoppingListItem } from './IngredientsShoppingListItem';
import { ErrorPage } from 'components/ErrorPage/ErrorPage';
// import { Loader } from 'components/Loader/Loader';

export const IngredientsShoppingList = () => {
  const [data, setData] = useState(null);

  const dispatch = useDispatch();

  const list = useSelector(selectShoppingList);
  const loading = useSelector(selectShoppingListIsLoading);
  const error = useSelector(selectShoppingListIsError);

  useEffect(() => {
    if (list.length <= 0 && data === null) {
      dispatch(fetchShoppingList());
    }
    setData(list);
  }, [data, dispatch, list]);

  const handleDeleteItem = (id, recipeId) => {
    console.log(id);
    console.log(recipeId);
    dispatch(deleteShoppingListItem({ id, recipeId }));
  };
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {data?.length > 0 ? (
        <>
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className="flex flex-row items-center justify-center px-[10px] md:px-[20px] xl:px-10 h-9 md:h-[60px] bg-accentMain rounded-lg"
          >
            <h3 className="mr-auto font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText">
              Product
            </h3>
            <h3 className="font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText">
              Number
            </h3>
            <h3 className="ml-6 md:ml-[78px] xl:ml-[142px] font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText">
              Remove
            </h3>
          </motion.div>
          {/* {loading ? (
            <div className="mx-auto flex items-center justify-center h-64">
              <Loader />
            </div> */}
          {/* ) : ( */}
          <Reorder.Group className="mt-2" values={data} onReorder={setData}>
            {data?.map(
              ({ id, thb, ttl, amount, measure, recipeId }, idx, arr) => (
                <IngredientsShoppingListItem
                  key={id}
                  id={id}
                  thb={thb}
                  ttl={ttl}
                  amount={amount}
                  measure={measure}
                  recipeId={recipeId}
                  idx={idx}
                  arr={arr}
                  loading={loading}
                  handleDeleteItem={handleDeleteItem}
                />
              )
            )}
          </Reorder.Group>
          {/* )} */}
        </>
      ) : (
        <EmptyShoppingList />
      )}
    </>
  );
};
