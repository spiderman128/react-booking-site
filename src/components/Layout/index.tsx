// Dependencies
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { setBreakPoint } from '../../redux/actions';
import breakpoints from '../../theme/breakpoints';
import * as S from './styles';

// Export layout component
export const Layout: FC = ({ children }) => {
  const dispatch = useDispatch();

  const initialBreakpoint = async () => {
    const width = window.innerWidth;

    if (width >= breakpoints.values.lg) {
      await dispatch(setBreakPoint('xl'));
    } else if (width >= breakpoints.values.md) {
      await dispatch(setBreakPoint('lg'));
    } else if (width >= breakpoints.values.sm) {
      await dispatch(setBreakPoint('md'));
    } else {
      await dispatch(setBreakPoint('sm'));
    }
  };

  useEffect(() => {
    (async () => await initialBreakpoint())();

    window.onresize = async () => {
      await initialBreakpoint();
    };

    return () => {
      window.onresize = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Layout>
      <Sidebar />
      <S.Aside>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Aside>
    </S.Layout>
  );
};
