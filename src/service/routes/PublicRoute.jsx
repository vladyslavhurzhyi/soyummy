import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoges } from '../../redux/auth/authSelectors';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(getLoges);
  const shoudlRedirect = isLoggedIn && restricted;
  return <>{shoudlRedirect ? <Navigate to={redirectTo} /> : <Component />}</>;
};
