// Dependencies
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Card, Carousel } from '../../../../components';
import { ListItem } from '../../../../components/Common/ListItem';

// Constants
const lastChats = [
  {
    image: '',
    name: 'Guy Hawkins',
    message: 'Hello!',
    createdAt: '19:20',
  },
  {
    image: '',
    name: 'Savannah Nguyen',
    message: 'change for anyone.',
    createdAt: '12:16',
  },
  {
    image: '',
    name: 'Jenny Wilson',
    message: 'I really need to send those image. Could you',
    createdAt: '08:54',
    notifyCount: 2,
  },
  {
    image: '',
    name: 'Annette Black',
    message: 'I had some ideas about it.',
    createdAt: '01.04.2022',
  },
  {
    image: '',
    name: 'Brooklyn Simmons',
    message: 'It is very good.',
    createdAt: '02.04.2022',
  },
  {
    image: '',
    name: 'Jenny Wilson',
    message: 'I really need to send those image. Could you',
    createdAt: '08:54',
  },
  {
    image: '',
    name: 'Annette Black',
    message: 'I had some ideas about it.',
    createdAt: '01.04.2022',
  },
  {
    image: '',
    name: 'Brooklyn Simmons',
    message: 'It is very good.',
    createdAt: '02.04.2022',
  },
];

// Export last-chats widget
export const LastChatsWidget: FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const carouselItems = lastChats.reduce((page: any[][], chat, index) => {
    if (index % 3 === 0) {
      return [...page, [chat]];
    } else {
      return [
        ...page.slice(0, page.length - 1),
        [...page[page.length - 1], chat],
      ];
    }
  }, []);

  // Return last-chats widget
  return (
    <Card title={t('dashboard.last_chats')} searchable onSearch={handleSearch} search={search}>
      <Box sx={{ pr: { md: 14 }, display: { xs: 'none', sm: 'block' } }}>
        {lastChats.map(
          ({ image, name, message, createdAt, notifyCount }, index) => (
            <ListItem
              key={index}
              avatar={image}
              title={name}
              subTitle={message}
              secondaryText={createdAt}
              notifyCount={notifyCount}
            />
          )
        )}
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Carousel>
          {carouselItems.map((page) => {
            return (
              <Box>
                {page.map(
                  ({ image, name, message, createdAt, notifyCount }, index) => (
                    <ListItem
                      key={index}
                      avatar={image}
                      title={name}
                      subTitle={message}
                      secondaryText={createdAt}
                      notifyCount={notifyCount}
                    />
                  )
                )}
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </Card>
  );
};
