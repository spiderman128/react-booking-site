// Dependencies
import { FC } from 'react';
import { Avatar, Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

// Components
import { Button, Icon, IconButton, Input, Typography } from '../../../Common';

// Interfaces
import { IClient } from '../index';

interface IChatsViewProps {
  client?: IClient;
  visible: boolean;
  onClickInformation: () => void;
}

// Create Chats iew
const ChatsView: FC<IChatsViewProps> = ({
  client,
  visible,
  onClickInformation,
}) => {
  // Get translation from hook
  const { t } = useTranslation();

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Return Chats view
  return (
    <Box
      flex={1}
      sx={(theme) => ({
        display: {
          xs: visible ? 'block' : 'none',
          sm: 'block',
        },
        borderLeft: isMobile
          ? 'none'
          : `1px solid ${theme.palette['lightCyan']}`,
      })}
    >
      {client ? (
        <Stack direction="row">
          <Stack py={16} px={20} flex={1} minWidth={{ xs: '100%', sm: 500 }}>
            <Stack
              mb={16}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={16}>
                <Avatar
                  sx={{
                    width: '64px !important',
                    height: '48px !important',
                  }}
                />
                <Typography variant="subtitle1">
                  {client.firstName} {client.lastName}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={8}>
                <IconButton>
                  <Icon name="search" />
                </IconButton>
                <IconButton>
                  {/* @ts-ignore */}
                  <Icon name="trash" color={theme.palette.darkIndigo} />
                </IconButton>
                <IconButton onClick={onClickInformation}>
                  <Icon name="info" />
                </IconButton>
              </Stack>
            </Stack>
            <PerfectScrollbar
              style={{
                height: isMobile
                  ? 'calc(100vh - 290px)'
                  : 'calc(100vh - 400px)',
              }}
            >
              <Stack spacing={16}>
                {client.chats.map(
                  ({ message, createdAt, type, image }, index) => {
                    const isReceived = type === 'received';

                    return (
                      <Stack
                        key={index}
                        alignItems={isReceived ? 'flex-start' : 'flex-end'}
                      >
                        <Stack
                          width={isMobile ? '90%' : '70%'}
                          alignItems={isReceived ? 'flex-start' : 'flex-end'}
                        >
                          <Typography mb={4} variant="caption">
                            {isReceived
                              ? `${client.firstName}, ${createdAt}`
                              : createdAt}
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              p: 16,
                              mb: 8,
                              borderRadius: 2,
                              borderTopLeftRadius: isReceived ? 0 : 8,
                              borderBottomRightRadius: isReceived ? 8 : 0,
                              bgcolor:
                                theme.palette[
                                  isReceived ? 'lightCyan' : 'cyan'
                                ],
                            })}
                          >
                            {message}
                          </Typography>
                          {image && (
                            <Avatar
                              sx={{
                                width: '240px !important',
                                height: '180px !important',
                                borderTopLeftRadius: isReceived
                                  ? '0px !important'
                                  : '8px !important',
                                borderBottomRightRadius: isReceived
                                  ? '8px !important'
                                  : '0 !important',
                              }}
                            />
                          )}
                        </Stack>
                      </Stack>
                    );
                  }
                )}
              </Stack>
              <Typography mt={8} paragraph variant="caption">
                ●•• {t('chats.typing')}
              </Typography>
            </PerfectScrollbar>
            <Stack mt={{ xs: 12, sm: 16 }} direction="row" spacing={20}>
              <Input
                size={isMobile ? 'small' : 'large'}
                sx={{ flex: 1 }}
                placeholder={t('chats.type_message')}
              />
              <IconButton size={isMobile ? 'small' : 'large'}>
                <Icon name="smile" />
              </IconButton>
              <IconButton size={isMobile ? 'small' : 'large'}>
                <Icon name="clip" />
              </IconButton>
              <Button
                size="large"
                color="primary"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                {t('chats.send')}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography align="center">
            {t('chats.description')}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChatsView;
