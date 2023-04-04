import { useSelector } from 'react-redux';
import { getUser, getLoges, getIsRefreshing } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLoges);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
