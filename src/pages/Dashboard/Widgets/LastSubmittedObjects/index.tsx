// Dependencies
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Icon, IconButton } from '../../../../components';
import { Card } from '../../../../components';
import { ListItem } from '../../../../components/Common/ListItem';
import { Carousel } from '../../../../components';
import { Accordion } from '../../../../components/Common/Accordion';

// Constants
const lastChats = [
  {
    image: '',
    name: 'Max Musterman',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
  {
    image: '',
    name: 'Savannah Nguyen',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
    notify: true,
  },
  {
    image: '',
    name: 'Jenny Wilson',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
  {
    image: '',
    name: 'Annette Black',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
  {
    image: '',
    name: 'Brooklyn Simmons',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
  {
    image: '',
    name: 'Jenny Wilson',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
  {
    image: '',
    name: 'Annette Black',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
  {
    image: '',
    name: 'Brooklyn Simmons',
    submittedAt: '23.04.2022',
    modifiedAt: '02.04.2022',
    status: 'Assessment',
  },
];

const AccordionPage = ({ page, pageIndex }) => {
  const [expanded, setExpanded] = useState<any>(-1);
  const handleExpand =
    (value: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? value : false);
    };

  return (
    <Box sx={{ p: 12, pt: 0 }}>
      {page.map(
        ({ image, name, submittedAt, modifiedAt, status, notify }, index) => (
          <Accordion
            key={index}
            expanded={expanded === index + pageIndex * 2}
            avatar={image}
            title={name}
            subTitle={`Submitted: ${submittedAt}`}
            secondarySubTitle={`Last change: ${modifiedAt}`}
            comment={`Comment: Stylish red house`}
            status={status}
            notify={notify}
            onChange={handleExpand(index + pageIndex * 2)}
          />
        )
      )}
    </Box>
  );
};

// Export last-submitted-objects widget
export const LastSubmittedObjectsWidget: FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const carouselItems = lastChats.reduce((page: any[][], chat, index) => {
    if (index % 2 === 0) {
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

  // Return last-submitted-objects widget
  return (
    <Card
      title={t('dashboard.last_submitted_objects')}
      action={
        <IconButton>
          <Icon name="arrow-down-up" />
        </IconButton>
      }
      searchable
      onSearch={handleSearch}
      search={search}
    >
      <Box sx={{ pr: { md: 14 }, display: { xs: 'none', sm: 'block' } }}>
        {lastChats.map(
          ({ image, name, submittedAt, modifiedAt, status, notify }, index) => (
            <ListItem
              key={index}
              avatar={image}
              title={name}
              subTitle={`Submitted: ${submittedAt}`}
              secondarySubTitle={`Last change: ${modifiedAt}`}
              status={status}
              notify={notify}
            />
          )
        )}
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Carousel>
          {carouselItems.map((page, pageIndex) => {
            return (
              <AccordionPage
                page={page}
                pageIndex={pageIndex}
                key={pageIndex}
              />
            );
          })}
        </Carousel>
      </Box>
    </Card>
  );
};
