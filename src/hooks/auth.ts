import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/actions';
import { RootState } from '../redux/reducers';

export const useAccountState = () => useSelector(({
  authReducer: { authorized, loading }
}: RootState) => ({
  authorized,
  loading,
}));

export const useLogoutAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(logout());
};
