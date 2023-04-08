import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoges, getIsRefreshing } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getLoges);
  const isRefreshing = useSelector(getIsRefreshing);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : <Component />}</>;
};
