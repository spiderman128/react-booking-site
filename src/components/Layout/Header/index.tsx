// Dependencies
import { FC, useEffect, useState } from 'react';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Components
import { Icon, Input } from '../../Common';
import { DrawerContent } from '../DrawerContent';
import {
  ChatsModal,
  CreateNewClientModal,
  CustomizeDashboardModal,
} from '../../Modals';

// Actions
import { getCreateClientForms } from '../../../redux/actions/client.action';

// Styles
import * as S from './styles';

// Export header component
export const Header: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);
  const [openCustomizeDashboard, setOpenCustomizeDashboard] =
    useState<boolean>(false);
  const [openCreateClientModal, setOpenCreateClientModal] =
    useState<boolean>(false);
  const [openChatsModal, setOpenChatsModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getCreateClientForms());
  }, [dispatch]);

  const handleCloseCustomizeDashboard = () => {
    setOpenCustomizeDashboard(false);
  };

  const handleOpenCustomizeDashboard = () => {
    setOpenCustomizeDashboard(true);
  };

  const handleOpenCreateClientModal = () => {
    setOpenCreateClientModal(true);
  };

  const handleCloseCreateClientModal = () => {
    setOpenCreateClientModal(false);
  };

  const handleOpenChatsModal = () => {
    setOpenChatsModal(true);
  };

  const handleCloseChatsModal = () => {
    setOpenChatsModal(false);
  };

  // Return header component
  return (
    <S.Header>
      <S.DesktopHeader sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <Typography variant="h1">Hello, Darrell</Typography>
        <Stack direction="row" spacing={16}>
          <Input
            size="large"
            startAdornment={<Icon name="search" size={23} />}
            placeholder={t('header.search')}
            sx={{ width: 370, display: { md: 'none', lg: 'flex' } }}
          />
          <IconButton
            sx={{ display: { md: 'block', lg: 'none' } }}
            size="large"
            onClick={handleOpenCustomizeDashboard}
          >
            <Icon name="search" />
          </IconButton>
          <IconButton size="large" onClick={handleOpenCustomizeDashboard}>
            <Icon name="checks-grid" />
          </IconButton>
          <IconButton size="large" onClick={handleOpenChatsModal}>
            <Icon name="message" />
          </IconButton>
          <Button
            color="primary"
            startIcon={<Icon name="plus-lg" />}
            size="large"
            onClick={handleOpenCreateClientModal}
          >
            {t('header.new_client')}
          </Button>
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
            <IconButton
              color="default"
              onClick={() => setOpenMobileDrawer(!openMobileDrawer)}
            >
              <Icon size={14} name={!openMobileDrawer ? 'menu' : 'x-lg'} />
            </IconButton>
            <S.Logo src="/assets/images/logo.svg" alt="logo" />
          </S.Brand>
          {!openMobileDrawer && (
            <Stack direction="row" spacing={16}>
              <IconButton onClick={handleOpenCustomizeDashboard}>
                <Icon name="search" />
              </IconButton>
              <IconButton onClick={handleOpenCustomizeDashboard}>
                <Icon name="checks-grid" />
              </IconButton>
              <IconButton onClick={handleOpenChatsModal}>
                <Icon name="message" />
              </IconButton>
              <S.DarkIconButton onClick={handleOpenCreateClientModal}>
                <Icon name="plus-lg" color="secondary" />
              </S.DarkIconButton>
            </Stack>
          )}
        </Stack>
        {!openMobileDrawer && (
          <Typography variant="h2">Hello, Darrell</Typography>
        )}
        <S.MobileDrawer
          sx={{ display: { sm: 'block', md: 'none' } }}
          anchor="top"
          open={openMobileDrawer}
          onClose={() => setOpenMobileDrawer(false)}
        >
          <DrawerContent />
        </S.MobileDrawer>
      </S.MobileHeader>
      {openCustomizeDashboard && (
        <CustomizeDashboardModal
          open={openCustomizeDashboard}
          onClose={handleCloseCustomizeDashboard}
        />
      )}
      {openCreateClientModal && (
        <CreateNewClientModal
          open={openCreateClientModal}
          onClose={handleCloseCreateClientModal}
        />
      )}
      {openChatsModal && (
        <ChatsModal open={openChatsModal} onClose={handleCloseChatsModal} />
      )}
    </S.Header>
  );
};
