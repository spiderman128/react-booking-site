// Dependencies
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import {
  Button,
  DataTable,
  IColumn,
  Icon,
  IconButton,
  Input,
  Typography,
} from '../../components';

// Tab panels
import { ProfilePanel, SubmittedPanel } from './TabPanels';

// Styles
import * as S from './styles';

// Interfaces
export interface IForm {
  submit: () => void;
}

// Constants
enum TabPanels {
  Detected,
  Submitted,
  Rejected,
  Bought,
  Sold,
  Profile,
}

const mockData = [
  {
    id: 1,
    photo: '',
    name: 'Andreas Hass',
    company: 'MWR GmbH',
  },
  {
    id: 2,
    photo: '',
    name: 'Andreas Hass',
    company: 'Garant Immobilien',
  },
  {
    id: 3,
    photo: '',
    name: 'Kerstin Flscher',
    company: 'Garant Immobilien',
  },
  {
    id: 4,
    photo: '',
    name: 'Courtney Henry',
    company: 'MWR GmbH',
  },
  {
    id: 5,
    photo: '',
    name: 'Devon Lane',
    company: 'Garant',
  },
  {
    id: 6,
    photo: '',
    name: 'Kristin Watson',
    company: 'Garant',
  },
  {
    id: 7,
    photo: '',
    name: 'Kristin Watson',
    company: 'MWR GmbH',
  },
  {
    id: 8,
    photo: '',
    name: 'Courtney Henry',
    company: 'Garant',
  },
  {
    id: 9,
    photo: '',
    name: 'Devon Lane',
    company: 'Garant',
  },
  {
    id: 10,
    photo: '',
    name: 'Kristin Watson',
    company: 'MWR GmbH',
  },
  {
    id: 11,
    photo: '',
    name: 'Kristin Watson',
    company: 'MWR GmbH',
  },
];

// Export BrokersDetail page
export const BrokersDetailPage: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // States
  const [activeTab, setActiveTab] = React.useState<TabPanels>(
    TabPanels.Profile
  );
  const [form, setForm] = useState<IForm | null>(null);
  const [visibleExtraInformationModal, setVisibleExtraInformationModal] =
    useState<boolean>(false);

  // Theme
  const theme = useTheme();

  // Check platform
  const isDesktop = useMediaQuery('(min-width: 1300px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Tab change handler
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Get navigate from hook
  const navigate = useNavigate();

  // Go back handler
  const handleGoBack = () => {
    navigate(-1);
  };

  // Save handler
  const handleSave = () => {
    if (form) form.submit();
  };

  // Close extra information modal handler
  const handleCloseExtraInformationModal = () => {
    setVisibleExtraInformationModal(false);
  };

  const columns: IColumn[] = [
    {
      field: 'photo',
      label: 'Photo',
      sortable: false,
      render: (row) => (
        <Avatar src={row.photo} variant="square">
          <Icon name="user" size={16} />
        </Avatar>
      ),
    },
    {
      field: 'name',
      label: 'Name and Company',
      render: (row) => (
        <>
          <Typography variant="body2" fontWeight={500}>
            {row.name}
          </Typography>
          <Typography variant="body2" fontWeight={400}>
            {row.company}
          </Typography>
        </>
      ),
    },
  ];

  useEffect(() => {
    if (!isMobile) {
      setVisibleExtraInformationModal(false);
    }
  }, [isMobile]);

  // Return BrokersDetail page
  return isDesktop ? (
    <Grid container columns={3} spacing={20}>
      <Grid item xs={1}>
        <Card>
          <CardHeader
            sx={(theme) => ({
              pt: 25,
              pb: 22,
              borderBottom: `1px solid ${theme.palette['lightCyan']}`,
            })}
            title={
              <Stack direction="row" spacing={8}>
                <IconButton onClick={handleGoBack}>
                  <Icon name="arrow-back" />
                </IconButton>
                <Input
                  fullWidth
                  startAdornment={<Icon name="search" />}
                  placeholder={t('brokers_detail.search')}
                />
                <IconButton>
                  <Icon name="funnel-fill" />
                </IconButton>
              </Stack>
            }
          />
          <DataTable
            data={mockData}
            columns={columns}
            onSort={() => {}}
            stickyHeader
            contentSize={{
              height: 'calc(100vh - 248px)',
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardHeader
            sx={{ pb: 24 }}
            title={
              <Stack direction="row" spacing={16} alignItems="flex-start">
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
                      <Icon name="pencil" />
                    </IconButton>
                  }
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <Avatar sx={{ width: 132, height: 132 }}>
                    <Icon name="image-fill" />
                  </Avatar>
                </Badge>
                <Stack spacing={20}>
                  <Stack spacing={4}>
                    <Typography variant="h3">Andreas Haas</Typography>
                    <Typography>MWR GmbH</Typography>
                    <Typography>WhilelmstraBe 5, 70182, Stuttgart</Typography>
                  </Stack>
                  <Typography variant="body2" color="lightIndigo">
                    {t('brokers_detail.last_active')}: 27.05.2022
                  </Typography>
                </Stack>
              </Stack>
            }
            action={
              <Stack spacing={60} alignItems="flex-end">
                <IconButton>
                  <Icon name="trash" />
                </IconButton>
                {form !== null && (
                  <Button color="primary" onClick={handleSave}>
                    {t('brokers_detail.save')}
                  </Button>
                )}
              </Stack>
            }
          />
          <CardContent sx={{ p: 20, height: '100%' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label={t('brokers_detail.detected')} />
              <Tab label={t('brokers_detail.submitted')} />
              <Tab label={t('brokers_detail.rejected')} />
              <Tab label={t('brokers_detail.bought')} />
              <Tab label={t('brokers_detail.sold')} />
              <Tab label={t('brokers_detail.profile')} />
            </Tabs>
            <S.TabPanel>
              {/*{activeTab === TabPanels.Detected && (*/}
              {/*  <DetectedPanel setForm={setForm} />*/}
              {/*)}*/}
              {activeTab === TabPanels.Submitted && <SubmittedPanel />}
              {/*{activeTab === TabPanels.Sold && (*/}
              {/*  <SoldPanel />*/}
              {/*)}*/}
              {activeTab === TabPanels.Profile && (
                <ProfilePanel setForm={setForm} />
              )}
              {/*{activeTab === TabPanels.Tasks && <TasksPanel />}*/}
            </S.TabPanel>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <Card>
      <CardHeader
        sx={{ px: 16, pb: 4, pt: { xs: 18, sm: 20 } }}
        title={
          <IconButton onClick={handleGoBack}>
            <Icon name="arrow-back" />
          </IconButton>
        }
        action={
          <Stack direction="row" spacing={8}>
            <IconButton>
              <Icon name="trash" />
            </IconButton>
            {form !== null && (
              <Button color="primary" onClick={handleSave}>
                {t('brokers_detail.save')}
              </Button>
            )}
          </Stack>
        }
      />
      <CardContent>
        <Stack mb={24} direction="row" spacing={8} alignItems="flex-start">
          <Badge
            sx={{
              '.MuiBadge-badge': {
                padding: { xs: 4, sm: 8 },
                height: 'initial',
                transform: 'initial',
              },
            }}
            badgeContent={
              <IconButton>
                <Icon name="pencil" />
              </IconButton>
            }
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Avatar
              sx={{ width: { xs: 78, sm: 132 }, height: { xs: 78, sm: 132 } }}
            >
              <Icon name="image-fill" />
            </Avatar>
          </Badge>
          <Box>
            <Typography mb={2} variant="h4">
              Andreas Haas
            </Typography>
            <Typography>MWR GmbH</Typography>
            <Typography>WhilelmstraBe 5, 70182, Stuttgart</Typography>
            <Typography mt={8} variant="body2" color="lightIndigo">
              {t('brokers_detail.last_active')}: 27.05.2022
            </Typography>
          </Box>
        </Stack>
        <Tabs
          sx={{
            width: {
              xs: 'calc(100vw - 64px)',
              md: 'calc(100vw - 360px)',
            },
          }}
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={t('brokers_detail.detected')} />
          <Tab label={t('brokers_detail.submitted')} />
          <Tab label={t('brokers_detail.rejected')} />
          <Tab label={t('brokers_detail.bought')} />
          <Tab label={t('brokers_detail.sold')} />
          <Tab label={t('brokers_detail.profile')} />
        </Tabs>
        <S.TabPanel>
          {/*{activeTab === TabPanels.Detected && (*/}
          {/*  <DetectedPanel setForm={setForm} />*/}
          {/*)}*/}
          {activeTab === TabPanels.Submitted && <SubmittedPanel />}
          {/*{activeTab === TabPanels.Sold && <SoldPanel />}*/}
          {activeTab === TabPanels.Profile && (
            <ProfilePanel setForm={setForm} />
          )}
          {/*{activeTab === TabPanels.Tasks && <TasksPanel />}*/}
        </S.TabPanel>
      </CardContent>
    </Card>
  );
};
