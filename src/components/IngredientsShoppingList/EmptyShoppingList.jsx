import gif from '../../images/gif/emptyShoppingList.gif';

export const EmptyShoppingList = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <h2 className="mb-2 text-mainText dark:text-whiteText font-main font-semibold ">
        😞 No Product in your list!
      </h2>
      <img src={gif} alt="empty-gif" className="rounded-3xl" />
    </div>
  );
};
