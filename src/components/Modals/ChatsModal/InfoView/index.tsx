// Dependencies
import { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Divider,
  MenuItem,
  MenuList,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Icon, IconButton, Typography } from '../../../Common';

// Interfaces
import { IClient } from '../index';

interface IInfoViewProps {
  client?: IClient;
  visible: boolean;
  onCloseInformation: () => void;
  onPhotoClick: () => void;
}

// Create Info view
const InfoView: FC<IInfoViewProps> = ({
  client,
  visible,
  onCloseInformation,
  onPhotoClick,
}) => {
  // Get translation from hook
  const { t } = useTranslation();

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Return Info view
  return (
    <Box
      sx={(theme) => ({
        p: 20,
        width: { xs: '100%', sm: 280 },
        display: {
          xs: visible ? 'block' : 'none',
          sm: 'block',
        },
        borderLeft: isMobile
          ? 'none'
          : `1px solid ${theme.palette['lightCyan']}`,
      })}
    >
      <Stack
        mb={16}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <Typography variant="h5">{t('chats.user_info')}</Typography>
        <IconButton color="default" onClick={onCloseInformation}>
          <Icon name="x-lg" />
        </IconButton>
      </Stack>
      <Stack mb={25} direction="row" alignItems="center" spacing={16}>
        <Avatar />
        <Typography variant="subtitle1">
          {client?.firstName} {client?.lastName}
        </Typography>
      </Stack>
      <PerfectScrollbar
        style={{
          height: isMobile ? 'calc(100vh - 251px)' : 'fit-content',
        }}
      >
        <MenuList>
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon color={theme.palette['lightIndigo']} name="location" />
            </Box>
            <Typography ml={12} whiteSpace="break-spaces">
              Wilhelmstrases 5, 70182, Stuttgart
            </Typography>
          </MenuItem>
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon color={theme.palette['lightIndigo']} name="" />
            </Box>
            <Typography ml={12}>0361-6555896</Typography>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon color={theme.palette['lightIndigo']} name="document" />
            </Box>
            <Typography ml={12}>2 {t('chats.documents')}</Typography>
          </MenuItem>
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon color={theme.palette['lightIndigo']} name="image-fill" />
            </Box>
            <Typography ml={12} onClick={onPhotoClick}>
              7 {t('chats.photos')}
            </Typography>
          </MenuItem>
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon color={theme.palette['lightIndigo']} name="" />
            </Box>
            <Typography ml={12}>1 {t('chats.videos')}</Typography>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon color={theme.palette['lightIndigo']} name="eye" />
            </Box>
            <Typography ml={12}>{t('chats.show_object_details')}</Typography>
          </MenuItem>
          <MenuItem sx={{ height: 60, borderRadius: 2 }}>
            <Box display="flex">
              <Icon name="document" color={theme.palette.error.main} />
            </Box>
            <Typography ml={12} color={theme.palette.error.main}>
              {t('chats.delete_client')}
            </Typography>
          </MenuItem>
        </MenuList>
      </PerfectScrollbar>
    </Box>
  );
};

// Export Info view
export default InfoView;
