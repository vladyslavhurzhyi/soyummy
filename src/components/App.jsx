import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { MyRecipesList } from './MyRecipesList/MyRecipesList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/myrecipes" element={<MyRecipesList />} />
      </Route>
    </Routes>
  );
};
