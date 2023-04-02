import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserFetching, getLoges } from '../../redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

export const PrivateRoute = ({ children }) => {
  const userFetching = useSelector(getUserFetching);
  const Login = useSelector(getLoges);
  return Login ? userFetching ? <Loader /> : children : <Navigate to="/" />;
};
