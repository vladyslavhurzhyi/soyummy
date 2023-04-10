// import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { ReactComponent as Svg } from '../../images/svg/trash.svg';

import { EmptyShoppingList } from './EmptyShoppingList';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteShoppingListItem,
  fetchShoppingList,
} from 'redux/shoppingList/shoppingListOperations';
import {
  selectShoppingList,
  //   selectShoppingListIsError,
  //   selectShoppingListIsLoading,
} from 'redux/shoppingList/shoppingListSelector';

export const IngredientsShoppingList = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const darkMode = document.querySelector('html').classList.value;
  console.log(darkMode === 'dark');

  const list = useSelector(selectShoppingList);
  //   const loading = useSelector(selectShoppingListIsLoading);
  //   const error = useSelector(selectShoppingListIsError);

  useEffect(() => {
    if (list.length <= 0) {
      dispatch(fetchShoppingList());
    }
    setData(list);
  }, [dispatch, list]);

  const handleDeleteItem = (id, recipeId) => {
    dispatch(deleteShoppingListItem({ id, recipeId }));
  };

  return (
    <>
      {data.length > 0 ? (
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
          <Reorder.Group className="mt-2" values={data} onReorder={setData}>
            {data?.map(
              ({ id, thb, ttl, amount, measure, recipeId }, idx, arr) => (
                <Reorder.Item
                  value={arr[idx]}
                  initial={{
                    x: idx % 2 === 0 ? -200 : 200,
                    opacity: 0,
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  key={id}
                  className="flex flex-row items-center py-6 md:py-11 px-2 border-b xl:px-10"
                >
                  <img
                    src={thb}
                    alt="ingredient"
                    className="rounded-md object-cover max-w-[60px] h-[60px] md:max-w-[93px] md:h-[97px] dark:bg-accentHalfDark"
                  />
                  <p className="ml-[10px] md:ml-4 font-main font-medium text-[10px] leading-3 md:text-base text-secondaryText dark:text-whiteText">
                    {ttl}
                  </p>
                  <p className="flex items-center justify-center px-2 ml-auto  min-w-[37px] h-[23px] md:min-w-[68px] md:h-[35PX] rounded bg-accentMain font-main font-semibold text-[10px] leading-[15px] md:text-[18px] md:leading-[27px] text-whiteText">
                    {`${amount} ${measure}`}
                  </p>
                  <button
                    onClick={() => handleDeleteItem(id, recipeId)}
                    type="button"
                    className="ml-[46px] mr-5 md:mr-12 md:ml-28 xl:ml-44  hover:animate-pulse"
                  >
                    <div className="divIconTrash dark:bg-transparent dark:hover:bg-accentHalfDark">
                      <Svg className="stroke-black dark:stroke-white" />
                    </div>
                  </button>
                </Reorder.Item>
              )
            )}
          </Reorder.Group>
        </>
      ) : (
        <EmptyShoppingList />
      )}
    </>
  );
};
