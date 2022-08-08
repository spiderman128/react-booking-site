// Dependencies
import { FC } from 'react';
import { ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import { Icon } from '../../Common';

// Styles
import * as S from './styles';

// Global constants
import { NAV_LINKS, ROUTES } from '../../../constants';

// Hooks
import { useLogoutAction } from '../../../hooks';

interface IDrawerContentProps {
  isCollapsed?: boolean;
}

// Export sidebar component
export const DrawerContent: FC<IDrawerContentProps> = ({
  isCollapsed = false,
}) => {
  const { t } = useTranslation();
  const logoutAction = useLogoutAction();

  const handleLogout = () => {
    logoutAction();
  };

  return (
    <>
      <S.Menu>
        {NAV_LINKS.map(({ label, icon, size, path }, index) => (
          // @ts-ignore
          <S.MenuItem key={index} component={NavLink} to={path}>
            <S.MenuItemIcon>
              <Icon name={icon} size={size} />
            </S.MenuItemIcon>
            {!isCollapsed && (
              <S.MenuItemText variant="h3">{t(`sidebar.${label}`)}</S.MenuItemText>
            )}
          </S.MenuItem>
        ))}
      </S.Menu>
      <S.BottomMenu>
        {/* @ts-ignore */}
        <S.MenuItem component={NavLink} to={ROUTES.PROFILE}>
          <S.MenuItemAvatar src="/assets/images/avatar.png" alt="avatar" />
          {!isCollapsed && (
            <ListItemText
              sx={{ my: 0, ml: 12 }}
              primary="Darrell Steward"
              secondary="IBM"
              primaryTypographyProps={{
                variant: 'h3',
                sx: { whiteSpace: 'nowrap', overflow: 'hidden' },
              }}
            />
          )}
        </S.MenuItem>
        <S.MenuItem onClick={handleLogout}>
          <S.MenuItemIcon>
            <Icon name="box-arrow-right" />
          </S.MenuItemIcon>
          {!isCollapsed && (
            <S.MenuItemText variant="h3">{t('sidebar.logout')}</S.MenuItemText>
          )}
        </S.MenuItem>
      </S.BottomMenu>
    </>
  );
};
