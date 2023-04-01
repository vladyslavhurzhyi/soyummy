import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoges } from '../../redux/auth/authSelectors';

export const RegisterRoute = ({
  children,
  registered = false,
  redirectTo = '/main',
}) => {
  const Login = useSelector(getLoges);
  const shouldRedirect = Login && registered;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
