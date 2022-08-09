// Dependencies
import { FC } from 'react';
import { Chip, Divider, FormControlLabel, Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import { Icon } from '../../Common';

// Styles
import * as S from './styles';

// Global constants
import { NAV_LINKS } from '../../../constants';

interface IDrawerContentProps {
  isCollapsed?: boolean;
}

// Export sidebar component
export const DrawerContent: FC<IDrawerContentProps> = ({
  isCollapsed = false,
}) => {
  const { t } = useTranslation();  

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
      
      {isCollapsed
        ? <S.BottomMenu>
            <Divider className='my-3' />
            <div className='py-3 px-4 font-size-15'>
              <i className='fa fa-question-circle-o me-2' />
            </div>
            <div className='py-3 px-4'>
              <FormControlLabel
                control={
                  <Switch size="small"/>
                }
                label=""
              />
            </div>
          </S.BottomMenu>
        : <S.BottomMenu>
            <Divider className='my-3' />
            <div className='py-3 px-4 d-flex font-size-15 width-match-parent'>
              <div className='me-auto'><i className='fa fa-question-circle-o me-2' />{t('sidebar.help')}</div>
              <div><Chip label="8" /></div>
            </div>
            <div className='py-3 px-4'>
              <FormControlLabel
                control={
                  <Switch name="jason" className='me-4' />
                }
                label="Theme"
              />
            </div>
          </S.BottomMenu>
      }
    </>
  );
};
