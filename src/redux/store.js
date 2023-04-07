import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import recipesReducer from './recipes/recipesSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import shoppingListReducer from './shoppingList/shoppingListSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
