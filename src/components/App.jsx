import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAccessToken } from 'redux/auth/authSelectors';
import { current } from 'redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';

import { PrivateRoute, PublicRoute } from 'service/routes';
import Register from 'pages/RegisterPage';
import Signin from 'pages/SigninPage';
import MainPage from 'pages/MainPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import AddRecipe from 'pages/AddRecipe';
import FavoritesPage from 'pages/FavoritesPage';
import WellcomPage from 'pages/WellcomPage';
import ShoppingListPage from 'pages/ShoppingListPage';
import MyRecipesPage from 'pages/MyRecipesPage';
import { Search } from 'pages/Search';
import RecipePage from 'pages/RecipePage';
import CategoriesPage from 'pages/CategoriesPage';
import CategoriesRecipesList from './CategoriesRecipeList/CategoriesRecipeList';

export const App = () => {
  const token = useSelector(getAccessToken);

  const dispatcher = useDispatch();

  useEffect(() => {
    if (token === null) return;
    dispatcher(current());
  }, [dispatcher, token]);

  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={
            <PublicRoute
              component={WellcomPage}
              redirectTo="/main"
              restricted
            />
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute component={Register} redirectTo="/main" restricted />
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute component={Signin} redirectTo="/main" restricted />
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute component={SharedLayout} redirectTo="/welcome" />
          }
        >
          <Route
            path="/main"
            element={<PrivateRoute component={MainPage} redirectTo="/signin" />}
          />
          <Route
            path="/add"
            element={
              <PrivateRoute component={AddRecipe} redirectTo="/signin" />
            }
          />
          <Route
            path="/favorite"
            element={
              <PrivateRoute component={FavoritesPage} redirectTo="/signin" />
            }
          />
          <Route
            path="/shopping-list"
            element={
              <PrivateRoute component={ShoppingListPage} redirectTo="/signin" />
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute component={MyRecipesPage} redirectTo="/signin" />
            }
          />
          <Route
            path="/search"
            element={<PrivateRoute component={Search} redirectTo="/signin" />}
          />
          <Route
            path="/recipes/:recipeId"
            element={
              <PrivateRoute component={RecipePage} redirectTo="/signin" />
            }
          />

          <Route
            path="/categories"
            element={
              <PrivateRoute component={CategoriesPage} redirectTo="/signin" />
            }
          >
            <Route
              path="/categories/:category"
              element={<CategoriesRecipesList />}
            />
            <Route />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
