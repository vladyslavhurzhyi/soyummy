export const helperPending = state => {
  state.isLoading = true;
};

export const helperRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const helperFulfilledFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.shoppingList = action.payload;
};

export const helperFulfilledAdd = (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.shoppingList.push(action.payload);
};

export const helperFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.shoppingList = state.shoppingList.filter(
    item => item.id !== action.payload.id
  );
};
