import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MyRecipesList } from './MyRecipesList/MyRecipesList';
import { Register } from 'pages/RegisterPage/RegisterPage';
import { Lognin } from 'pages/LogninPage/LogninPage';
import { WellcomPage } from 'components/WellcomPage/WellcomPage';

const HomePage = lazy(() => import('../pages/Home'));
const AddRecipePage = lazy(() => import('../pages/AddRecipe'));

export const App = () => {
  return (
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/myrecipes" element={<MyRecipesList />} />
         <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Lognin />} />
        <Route path="/welcomePage" element={<WellcomPage />} />
      </Route>
    </Routes>
  );
};
