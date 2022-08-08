// Dependencies
import React, { FC } from 'react';
import { Avatar, Badge, Box, Divider, Stack, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Button, Icon, IconButton, Typography } from '../../../../components';

// Constants
const photos = new Array(4).fill({
  src: '',
  createdAt: '20.05.2022',
});

// Export Files panel
export const FilesPanel: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // Theme
  const theme = useTheme();

  // Return Files panel
  return (
    <>
      <Typography mb={20} variant="h3">
        {t('objects_detail.files')}
      </Typography>
      <Typography mb={20} variant="h3">
        {t('objects_detail.current_extract_from')}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={{ xs: 16, sm: 28 }}
      >
        <Stack direction="row" alignItems="center">
          {/* @ts-ignore */}
          <Icon name="document" color={theme.palette.lightIndigo} />
          <Stack ml={8} mr={16}>
            <Typography variant="caption">currentextract.pdf</Typography>
            <Typography variant="caption" color="lightIndigo">
              12kb
            </Typography>
          </Stack>
          <Typography mr={18} variant="caption">
            20.05.2022
          </Typography>
          <IconButton>
            <Icon name="trash" />
          </IconButton>
        </Stack>
        <Button>{t('objects_detail.select_files')}</Button>
      </Stack>
      <Divider sx={{ mt: 34, mb: 31 }} />
      <Typography mb={12} variant="h3">
        {t('objects_detail.photos_of_the_property')}
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {photos.map(({ src, createdAt }, index) => (
          <Stack mr={12} mb={12} key={index} alignItems="flex-end" spacing={4}>
            <Badge
              sx={{
                '.MuiBadge-badge': {
                  padding: 8,
                  height: 'initial',
                  transform: 'initial',
                },
              }}
              badgeContent={
                <IconButton>
                  <Icon name="trash" />
                </IconButton>
              }
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar
                src={src}
                sx={{ width: { xs: 90, sm: 180 }, height: { xs: 60, sm: 120 } }}
              >
                <Icon name="image-fill" />
              </Avatar>
            </Badge>
            <Typography variant="caption">{createdAt}</Typography>
          </Stack>
        ))}
        <Avatar
          sx={{
            width: { xs: 90, sm: 180 },
            height: { xs: 60, sm: 120 },
            // @ts-ignore
            backgroundColor: theme.palette.lightCyan,
            // @ts-ignore
            border: `1px solid ${theme.palette.cyan}`,
            cursor: 'pointer',
          }}
        >
          {/* @ts-ignore */}
          <Icon name="plus-lg" color={theme.palette.darkIndigo} />
        </Avatar>
      </Box>
    </>
  );
};
