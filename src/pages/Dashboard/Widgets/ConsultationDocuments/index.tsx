// Dependencies
import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';
import { ListItem } from '../../../../components/Common/ListItem';
import { Carousel } from '../../../../components';

// Constants
const lastChats = [
  {
    image: '',
    name: 'Consultation Sheet',
  },
  {
    image: '',
    name: 'Info Broche',
  },
  {
    image: '',
    name: 'Guide',
  },
  {
    image: '',
    name: 'Current Mortality Table',
  },
  {
    image: '',
    name: 'Tax Table',
  },
  {
    image: '',
    name: 'Consultation Sheet',
  },
  {
    image: '',
    name: 'Consultation Sheet',
  },
  {
    image: '',
    name: 'Consultation Sheet',
  },
];

// Export consultation-documents widget
export const ConsultationDocumentsWidget: FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

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

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleDownload = () => {};

  // Return consultation-documents widget
  return (
    <Card
      title={t('dashboard.consultation_documents')}
      searchable
      onSearch={handleSearch}
      search={search}
    >
      <Box sx={{ pr: { md: 14 }, display: { xs: 'none', sm: 'block' } }}>
        {lastChats.map(({ image, name }, index) => (
          <ListItem
            key={index}
            title={name}
            avatar={image}
            onDownload={handleDownload}
          />
        ))}
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Carousel>
          {carouselItems.map((page) => {
            return (
              <Box>
                {page.map(({ image, name }, index) => (
                  <ListItem
                    key={index}
                    title={name}
                    avatar={image}
                    onDownload={handleDownload}
                  />
                ))}
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </Card>
  );
};
