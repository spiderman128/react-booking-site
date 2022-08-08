// Dependencies
import { FC } from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

// Components
import { Button, Icon, IconButton, Input, Typography } from '../../../Common';

// Interfaces
import { IClient } from '../index';

interface IClientViewProps {
  visible: boolean;
  onClickClient: (client: IClient) => void;
}

// Constants
const clients: IClient[] = [
  {
    id: 1,
    image: '',
    firstName: 'Guy',
    lastName: 'Hawkins',
    chats: [
      {
        message:
          'Good afternoon!\nI have a wonderful photo of our kitchen. It is a very large space with light walls.',
        image: 'image',
        createdAt: '19:20',
        type: 'received',
      },
      {
        message:
          'Oh, this is very ergonomic kitchen.\nI think they will like it!',
        createdAt: '19:20',
        type: 'sent',
      },
      {
        message: 'Hello!',
        createdAt: '19:20',
        type: 'received',
      },
    ],
  },
  {
    id: 2,
    image: '',
    firstName: 'Savannah',
    lastName: 'Nguyen',
    chats: [
      {
        message:
          'Good afternoon!\nI have a wonderful photo of our kitchen. It is a very large space with light walls.',
        image: 'image',
        createdAt: '19:20',
        type: 'received',
      },
      {
        message:
          'Oh, this is very ergonomic kitchen.\nI think they will like it!',
        createdAt: '19:20',
        type: 'sent',
      },
      {
        message: 'Change for anyone.',
        createdAt: '12:16',
        type: 'received',
      },
    ],
  },
  {
    id: 3,
    image: '',
    firstName: 'Jenny',
    lastName: 'Wilson',
    unread: 2,
    chats: [
      {
        message:
          'Good afternoon!\nI have a wonderful photo of our kitchen. It is a very large space with light walls.',
        image: 'image',
        createdAt: '19:20',
        type: 'received',
      },
      {
        message:
          'Oh, this is very ergonomic kitchen.\nI think they will like it!',
        createdAt: '19:20',
        type: 'sent',
      },
      {
        message: 'I really need to send...',
        createdAt: '08:54',
        type: 'received',
      },
    ],
  },
];

// Create clients view
const ClientsView: FC<IClientViewProps> = ({ visible, onClickClient }) => {
  // Get translation from hook
  const { t } = useTranslation();

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Return Client view
  return (
    <Box
      sx={() => ({
        minWidth: { xs: '100%', sm: 402 },
        p: { xs: 16, sm: '16px 16px 20px 20px' },
        display: {
          xs: visible ? 'block' : 'none',
          sm: 'block',
        },
      })}
    >
      <Stack
        mb={{ xs: 16, sm: 12 }}
        spacing={{ xs: 8, sm: 12 }}
        direction="row"
      >
        {isMobile ? (
          <Button fullWidth>{t('chats.start_new_chat')}</Button>
        ) : (
          <Input
            sx={{ flex: 1 }}
            placeholder={t('chats.search')}
            startAdornment={<Icon name="search" />}
          />
        )}
        <IconButton sx={{ display: { xs: '', sm: 'none' } }}>
          <Icon name="search" />
        </IconButton>
        <IconButton>
          <Icon name="funnel-fill" />
        </IconButton>
        <IconButton>
          <Icon name="arrow-down-up" />
        </IconButton>
      </Stack>
      <Button fullWidth sx={{ mb: 20, display: { xs: 'none', sm: 'block' } }}>
        {t('chats.start_new_chat')}
      </Button>
      <PerfectScrollbar
        style={{
          height: isMobile ? 'calc(100vh - 230px)' : 'calc(100vh - 400px)',
          paddingRight: 13,
        }}
      >
        <List>
          {clients.map(({ id, firstName, lastName, chats, unread }) => (
            <ListItem
              key={id}
              onClick={() =>
                onClickClient({
                  id,
                  firstName,
                  lastName,
                  chats,
                  unread,
                })
              }
              sx={{
                borderRadius: 2,
                p: { xs: '10px 8px', sm: 12 },
                mb: 8,
                cursor: 'pointer',
              }}
            >
              <ListItemAvatar sx={{ minWidth: { xs: 64, sm: 80 } }}>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={
                  unread ? (
                    <Stack direction="row" alignItems="center" spacing={8}>
                      <Typography variant="subtitle1">
                        {firstName} {lastName}
                      </Typography>
                      <Typography
                        variant="caption"
                        align="center"
                        sx={(theme) => ({
                          borderRadius: 1.5,
                          width: 20,
                          height: 20,
                          color: theme.palette.common.white,
                          bgcolor: theme.palette.error.main,
                        })}
                      >
                        {unread}
                      </Typography>
                    </Stack>
                  ) : (
                    `${firstName} ${lastName}`
                  )
                }
                secondary={chats[chats.length - 1].message}
              />
              <Typography
                variant={isMobile ? 'caption' : 'body2'}
                mt={{ xs: -28, sm: -24 }}
              >
                {chats[chats.length - 1].createdAt}
              </Typography>
            </ListItem>
          ))}
        </List>
      </PerfectScrollbar>
    </Box>
  );
};

export default ClientsView;
