import gif from '../../images/emptyShoppingList.gif';

export const EmptyShoppingList = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <h2 className="mb-2 text-mainText font-main font-semibold ">
        😞 No Product in your list!
      </h2>
      <img src={gif} alt="empty-gif" />
    </div>
  );
};
