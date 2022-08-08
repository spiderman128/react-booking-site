// Dependencies
import { FC } from 'react';
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { SxProps } from '@mui/system';

import * as S from './styles';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { lightIndigo } from '../../../theme/palette';
import { IconButton } from '../IconButton';

export interface IListItemProps {
  sx?: SxProps;
  title?: string;
  subTitle?: string;
  secondarySubTitle?: string;
  avatar?: string;
  secondaryText?: string;
  status?: string;
  onDownload?: () => void;
  notifyCount?: number;
  notify?: boolean;
}

// Export ListItem component
export const ListItem: FC<IListItemProps> = ({
  avatar,
  sx,
  title,
  subTitle,
  secondaryText,
  secondarySubTitle,
  status,
  onDownload,
  notify,
  notifyCount,
}) => {
  return (
    <S.ListItem
      sx={sx}
      secondaryAction={
        onDownload && (
          <>
            <Button
              sx={{ display: { xs: 'none', sm: 'block' } }}
              onClick={onDownload}
            >
              Download
            </Button>
            <IconButton onClick={onDownload}>
              <Icon name="box-arrow-right" />
            </IconButton>
          </>
        )
      }
    >
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={
          !notifyCount && !notify ? (
            title
          ) : (
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle1">{title}</Typography>
              {notifyCount && <S.Notification>{notifyCount}</S.Notification>}
              {notify && (
                <S.Message>
                  <Icon name="chat-square-dots-fill" color={lightIndigo} />
                </S.Message>
              )}
            </Stack>
          )
        }
        secondary={
          subTitle &&
          (secondarySubTitle ? (
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">{secondarySubTitle}</Typography>
              <S.SecondarySubTitle variant="body2">
                {secondarySubTitle}
              </S.SecondarySubTitle>
            </Stack>
          ) : (
            subTitle
          ))
        }
      />
      {secondaryText && (
        <S.SecondaryListItemText variant="body2">
          {secondaryText}
        </S.SecondaryListItemText>
      )}
      {status && <S.Status>{status}</S.Status>}
      {onDownload && <></>}
    </S.ListItem>
  );
};
