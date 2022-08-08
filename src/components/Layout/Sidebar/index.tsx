// Dependencies
import { FC, useState } from 'react';
import { IconButton } from '@mui/material';

// Components
import { Icon } from '../../Common';

// Styles
import * as S from './styles';

// Global constants
import { useDispatch } from 'react-redux';
import { setIsDrawerOpened } from '../../../redux/actions';
import { DrawerContent } from '../DrawerContent';

// Export sidebar component
export const Sidebar: FC = () => {
  const dispatch = useDispatch();

  // States
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Toggle sidebar handler
  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);

    setTimeout(() => {
      dispatch(setIsDrawerOpened(!isCollapsed));
    }, 200);
  };

  // Return sidebar component
  return (
    <S.Sidebar isCollapsed={isCollapsed}>
      <S.Brand>
        {!isCollapsed && <S.Logo src="/assets/images/logo.svg" alt="logo" />}
        <IconButton color="default" onClick={handleToggleSidebar}>
          <Icon size={14} name="menu" />
        </IconButton>
      </S.Brand>
      <DrawerContent isCollapsed={isCollapsed} />
    </S.Sidebar>
  );
};
