// Dependencies
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Icon, Input } from '../../Common';
import { DrawerContent } from '../DrawerContent';
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import {
  ChatOutlined,
  NotificationsNoneOutlined,
} from '@mui/icons-material';

// Styles
import * as S from './styles'

// Export header component
export const Header: FC = () => {
  const { t } = useTranslation();

  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);

  // Return header component
  return (
    <S.Header>
      <S.DesktopHeader sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <Input
          size="large"
          startAdornment={<Icon name="search" size={23} />}
          placeholder={t('header.search')}
          sx={{ width: 370 }}
        />
        <Stack direction="row" spacing={16}>
          <Button
            color="primary"
            startIcon={<Icon name="plus-lg" />}
            size="large"
          >
            {t('header.create')}
          </Button>
          <IconButton size="large">
            <Badge color="error" variant="dot">
              <ChatOutlined />
            </Badge>
          </IconButton>
          <IconButton size="large">
            <Badge color="error" variant="dot">
              <NotificationsNoneOutlined />
            </Badge>
          </IconButton>
          <Avatar
            src="/assets/images/avatar.png"
            alt="user-avatar"
            sx={{ width: 50, height: 50, bgcolor: '#FFBC99' }}
            className="rounded-circle"
          />
        </Stack>
      </S.DesktopHeader>
      <S.MobileHeader sx={{ display: { sm: 'block', md: 'none' } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={!openMobileDrawer ? 16 : 0}
        >
          <S.Brand>
            <IconButton color="default" onClick={() => setOpenMobileDrawer(!openMobileDrawer)}>
              <Icon size={14} name={!openMobileDrawer ? 'menu' : 'x-lg'} />
            </IconButton>
            <S.Logo src="/assets/images/logo.svg" alt="logo" />
          </S.Brand>
          {!openMobileDrawer && (
            <Stack direction="row" spacing={16}>
              <IconButton>
                <Icon name="search" />
              </IconButton>
              <S.DarkIconButton>
                <Icon name="plus-lg" color="secondary" />
              </S.DarkIconButton>
              <IconButton>
                <Badge color="error" variant="dot">
                  <ChatOutlined />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge color="error" variant="dot">
                  <NotificationsNoneOutlined />
                </Badge>
              </IconButton>
            </Stack>
          )}
        </Stack>
        <S.MobileDrawer
          sx={{ display: { sm: 'block', md: 'none' } }}
          anchor="top"
          open={openMobileDrawer}
          onClose={() => setOpenMobileDrawer(false)}
        >
          <DrawerContent />
        </S.MobileDrawer>
      </S.MobileHeader>
    </S.Header>
  );
};