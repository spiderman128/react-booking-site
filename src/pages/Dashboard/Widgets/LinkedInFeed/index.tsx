// Dependencies
import React, { FC, useState } from 'react';
import {
  Avatar,
  Box,
  ListItem as MuiListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Styles
import * as S from './styles';
import { Card } from '../../../../components';
import { Icon } from '../../../../components';
import { Carousel } from '../../../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';

// Constants
const data = [
  {
    avatar: '',
    name: 'Meine Wohnrente',
    createdAt: '1 month ago',
    note: 'Meine Wohnrente is growing fast!\n\nWe are pleased that we have the DEGIV -  the company for real estate pensions - as a new',
    image: '',
    like: 128,
    comments: 19,
    feedback: 6,
  },
  {
    avatar: '',
    name: 'Meine Wohnrente',
    createdAt: '1 month ago',
    note: 'Meine Wohnrente is growing fast!\n\nWe are pleased that we have the DEGIV -  the company for real estate pensions - as a new',
    image: '',
    like: 128,
    comments: 19,
    feedback: 6,
  },
  {
    avatar: '',
    name: 'Meine Wohnrente',
    createdAt: '1 month ago',
    note: 'Meine Wohnrente is growing fast!\n\nWe are pleased that we have the DEGIV -  the company for real estate pensions - as a new',
    image: '',
    like: 128,
    comments: 19,
    feedback: 6,
  },
];

// Export linked-in-feed widget
export const LinkedInFeedWidget: FC = () => {
  const { t } = useTranslation();
  const breakpoint = useSelector(
    ({ uiReducer: { breakpoint } }: RootState) =>
      breakpoint
  );

  // States
  const [date, setDate] = useState('last month');

  // Date change handler
  const handleChangeDate = (e: SelectChangeEvent) => {
    setDate(e.target.value);
  };

  const FeedContent = ({ feed }) => {
    const { image, name, note, createdAt, like, comments, feedback } = feed;
    return (
      <S.FeedItemWrapper>
        <MuiListItem>
          <ListItemAvatar sx={{ minWidth: 60 }}>
            <Avatar
              variant="circular"
              src={image}
              sx={{ width: 48, height: 48 }}
            />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={createdAt} />
        </MuiListItem>
        <S.TextContent>
          <Typography variant="body1">
            {note.slice(0, breakpoint === 'sm' ? 56 : 125)}
          </Typography>
          <S.SeeMoreButton variant="subtitle1">..{t('dashboard.see_more')}</S.SeeMoreButton>
        </S.TextContent>
        <S.FeedImage>
          {image ? (
            <img src={image} alt="linkedln-feed" />
          ) : (
            <S.NoImageContent>
              <Typography variant="h2">{t('dashboard.no_image')}</Typography>
            </S.NoImageContent>
          )}
        </S.FeedImage>
        <Stack direction="row">
          <S.FeedInfo>
            <Icon name="hand" />
            <Typography variant="body1">{like}</Typography>
          </S.FeedInfo>
          <S.FeedInfo>
            <Icon name="chat-square-dots-fill" />
            <Typography>{comments}</Typography>
          </S.FeedInfo>
          <S.FeedInfo>
            <Icon name="back" />
            <Typography>{feedback}</Typography>
          </S.FeedInfo>
        </Stack>
      </S.FeedItemWrapper>
    );
  };

  // Return linked-in-feed widget
  return (
    <Card
      title={t('dashboard.linkedin_feed')}
      action={
        <Select value={date} onChange={handleChangeDate}>
          <MenuItem value="last month">{t('dashboard.last_month')}</MenuItem>
          <MenuItem value="this month">{t('dashboard.this_month')}</MenuItem>
        </Select>
      }
    >
      <Box sx={{ pr: { md: 14 }, display: { xs: 'none', sm: 'block' } }}>
        {data.map((feed, index) => (
          <FeedContent feed={feed} key={index} />
        ))}
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Carousel>
          {data.map((feed, index) => (
            <FeedContent feed={feed} key={index} />
          ))}
        </Carousel>
      </Box>
    </Card>
  );
};
