import { Reorder } from 'framer-motion';
import { Loader } from 'components/Loader/Loader';
import { Logo } from 'components/Logo/Logo';

export const IngredientsShoppingListItem = ({
  id,
  thb,
  ttl,
  amount,
  measure,
  recipeId,
  idx,
  arr,
  handleDeleteItem,
  loading,
}) => {
  return (
    <Reorder.Item
      value={arr[idx]}
      initial={{
        x: idx % 2 === 0 ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 0.6 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
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
          {loading ? (
            <Loader />
          ) : (
            <Logo
              trash
              cssClassIcon="iconTrash"
              cssClassDiv="stroke-black dark:stroke-white"
            />
          )}
        </div>
      </button>
    </Reorder.Item>
  );
};
