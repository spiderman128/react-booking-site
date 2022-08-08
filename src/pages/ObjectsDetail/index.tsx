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
  Divider,
  Grid,
  Menu,
  MenuItem,
  Popover,
  Stack,
  Tab,
  Tabs,
  ToggleButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Component
import {
  Button,
  Chip,
  DataTable,
  Dialog,
  IColumn,
  Icon,
  IconButton,
  Input,
  Typography,
} from '../../components';

// Tab panels
import {
  FilesPanel,
  IndicativeOfferPanel,
  PersonalDataPanel,
  TasksPanel,
} from './TabPanels';

// Styles
import * as S from './styles';

// Interfaces
export interface IForm {
  submit: () => void;
}

// Constants
enum TabPanels {
  PersonalData,
  RegistrationForm,
  ObjectProperties,
  Modernizations,
  IndicativeOffer,
  Files,
  Tasks,
}

const objects = [
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Kerstin Fischer',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Courtney Henry',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Kerstin Fischer',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Courtney Henry',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    address: 'Ahornweb 5, 79804, Dogern',
    createdAt: '12.06.2022',
  },
];

// Export ObjectsDetail page
export const ObjectsDetailPage: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // States
  const [activeTab, setActiveTab] = React.useState<TabPanels>(TabPanels.Files);
  const [ellipsisEl, setEllipsisEl] = useState<null | HTMLElement>(null);
  const [userEl, setUserEl] = useState<null | HTMLElement>(null);
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

  // Ellipsis click handler
  const handleEllipsisClick = (event: React.MouseEvent<HTMLElement>) => {
    setEllipsisEl(event.currentTarget);
  };

  // Close ellipsis menu handler
  const handleCloseEllipsisMenu = () => {
    setEllipsisEl(null);
  };

  // User click handler
  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserEl(event.currentTarget);
  };

  // Close user menu handler
  const handleCloseUserPopover = () => {
    setUserEl(null);
  };

  // Save handler
  const handleSave = () => {
    if (form) form.submit();
  };

  // Open extra information modal handler
  const handleOpenExtraInformationModal = () => {
    setVisibleExtraInformationModal(true);
  };

  // Close extra information modal handler
  const handleCloseExtraInformationModal = () => {
    setVisibleExtraInformationModal(false);
  };

  // Columns
  const columns: IColumn[] = [
    {
      field: 'photo',
      label: t('objects_detail.photo'),
      sortable: false,
      render: (row) => <Avatar src={row.photo} />,
    },
    {
      field: 'name',
      label: t('objects_detail.name_and_address'),
      render: (row) => (
        <>
          <Typography variant="body2" fontWeight={500}>
            {row.name}
          </Typography>
          <Typography variant="body2" fontWeight={400}>
            {row.address}
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

  // Return ObjectsDetail page
  return isDesktop ? (
    <Grid container columns={3} spacing={20}>
      <Grid item xs={1}>
        <Card>
          <CardHeader
            sx={(theme) => ({
              // @ts-ignore
              borderBottom: `1px solid ${theme.palette.lightCyan}`,
            })}
            title={
              <Stack direction="row" spacing={8}>
                <IconButton onClick={handleGoBack}>
                  <Icon name="arrow-back" />
                </IconButton>
                <Input
                  fullWidth
                  startAdornment={<Icon name="search" />}
                  placeholder="Search"
                />
                <IconButton>
                  <Icon name="funnel-fill" />
                </IconButton>
              </Stack>
            }
          />
          <DataTable
            data={objects}
            columns={columns}
            onSort={() => {}}
            stickyHeader
            contentSize={{
              height: 'calc(100vh - 237px)',
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardHeader
            sx={{ pb: 24 }}
            title={
              <Stack direction="row" spacing={16}>
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
                  <Avatar sx={{ width: 218, height: 168 }}>
                    <Icon name="image-fill" />
                  </Avatar>
                </Badge>
                <Box>
                  <Typography mb={2} variant="h3">
                    Brooklyn Simmons
                  </Typography>
                  <Typography mb={12}>
                    AugustenstraBe 3, 82319, Starnbergv
                  </Typography>
                  <Stack mb={22} direction="row" spacing={8}>
                    <Chip label="In Progress" />
                    <Chip
                      color="success"
                      label="Submission of Indicative Offer"
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={16}
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                    <Box>
                      <Typography mb={4} variant="body2">
                        {t('objects_detail.plot')}
                      </Typography>
                      <Typography variant="subtitle1">281 sqm</Typography>
                    </Box>
                    <Box>
                      <Typography mb={4} variant="body2">
                        {t('objects_detail.living_space')}
                      </Typography>
                      <Typography variant="subtitle1">150 sqm</Typography>
                    </Box>
                    <Box>
                      <Typography mb={4} variant="body2">
                        {t('objects_detail.rooms')}
                      </Typography>
                      <Typography variant="subtitle1">6</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            }
            action={
              <Stack spacing={8} alignItems="flex-end">
                <ToggleButton
                  value=""
                  size="small"
                  color="secondary"
                  selected={Boolean(ellipsisEl)}
                  onClick={handleEllipsisClick}
                >
                  <Icon name="ellipsis" />
                </ToggleButton>
                <Menu
                  anchorEl={ellipsisEl}
                  open={Boolean(ellipsisEl)}
                  onClose={handleCloseEllipsisMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleCloseEllipsisMenu}>
                    <Stack direction="row" spacing={12}>
                      <Icon name="tick" />
                      <Typography variant="body2">
                        {t('objects_detail.indicative_offer_accepted')}
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEllipsisMenu}>
                    <Stack direction="row" spacing={12}>
                      <Icon name="x-lg" />
                      <Typography variant="body2">
                        {t('objects_detail.indicative_offer_rejected')}
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEllipsisMenu}>
                    <Stack direction="row" spacing={12}>
                      <Icon name="" />
                      <Typography variant="body2">
                        {t('objects_detail.reset_status')}
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEllipsisMenu}>
                    <Stack direction="row" spacing={12}>
                      <Icon name="trash" />
                      <Typography variant="body2" color="error">
                        {t('objects_detail.delete')}
                      </Typography>
                    </Stack>
                  </MenuItem>
                </Menu>
                <ToggleButton
                  value=""
                  size="small"
                  color="secondary"
                  selected={Boolean(userEl)}
                  onClick={handleUserClick}
                >
                  <Icon name="user" />
                </ToggleButton>
                <Popover
                  anchorEl={userEl}
                  open={Boolean(userEl)}
                  onClose={handleCloseUserPopover}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <Stack p={16} alignItems="flex-end" spacing={16}>
                    <Stack direction="row">
                      <Avatar src="" sx={{ width: 48 }} />
                      <Typography ml={12} variant="body2">
                        Courtney Henry <br />
                        MWR GmbH
                      </Typography>
                      <Typography ml={25} mr={21} variant="body2">
                        {t('objects_detail.creation_date')}: 05.20.2022 <br />
                        {t('objects_detail.modification_date')}: 04.23.2022
                      </Typography>
                      <IconButton
                        color="default"
                        onClick={handleCloseUserPopover}
                      >
                        <Icon name="x-lg" />
                      </IconButton>
                    </Stack>
                    <Button>{t('objects_detail.change_broker')}</Button>
                  </Stack>
                </Popover>
                <IconButton>
                  <Icon name="message" />
                </IconButton>
                {form !== null && (
                  <Button color="primary" onClick={handleSave}>
                    Save
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
              <Tab label="Personal Data" />
              <Tab label="Registration Form" />
              <Tab label="Object Properties" />
              <Tab label="Modernizations" />
              <Tab label="Indicative Offer" />
              <Tab label="Files" />
              <Tab label="Tasks" />
            </Tabs>
            <S.TabPanel>
              {activeTab === TabPanels.PersonalData && (
                <PersonalDataPanel setForm={setForm} />
              )}
              {activeTab === TabPanels.IndicativeOffer && (
                <IndicativeOfferPanel />
              )}
              {activeTab === TabPanels.Files && <FilesPanel />}
              {activeTab === TabPanels.Tasks && <TasksPanel />}
            </S.TabPanel>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <Card>
      <CardHeader
        sx={{ px: 16, pb: 4 }}
        title={
          <IconButton onClick={handleGoBack}>
            <Icon name="arrow-back" />
          </IconButton>
        }
        action={
          <Stack direction="row" spacing={8}>
            <IconButton>
              <Icon name="message" />
            </IconButton>
            <ToggleButton
              value=""
              size="small"
              color="secondary"
              selected={Boolean(ellipsisEl)}
              onClick={handleEllipsisClick}
            >
              <Icon name="ellipsis" />
            </ToggleButton>
            <Menu
              anchorEl={ellipsisEl}
              open={Boolean(ellipsisEl)}
              onClose={handleCloseEllipsisMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleCloseEllipsisMenu}>
                <Stack direction="row" spacing={12}>
                  <Icon name="tick" />
                  <Typography variant="body2">
                    Indicative Offer Accepted
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseEllipsisMenu}>
                <Stack direction="row" spacing={12}>
                  <Icon name="x-lg" />
                  <Typography variant="body2">
                    Indicative Offer Rejected
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseEllipsisMenu}>
                <Stack direction="row" spacing={12}>
                  <Icon name="" />
                  <Typography variant="body2">Reset Status</Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseEllipsisMenu}>
                <Stack direction="row" spacing={12}>
                  <Icon name="trash" />
                  <Typography variant="body2" color="error">
                    Delete
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
            <ToggleButton
              value=""
              size="small"
              color="secondary"
              selected={Boolean(userEl)}
              onClick={handleUserClick}
            >
              <Icon name="user" />
            </ToggleButton>
            <Popover
              anchorEl={userEl}
              open={Boolean(userEl)}
              onClose={handleCloseUserPopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Stack p={16} alignItems="flex-end" spacing={16}>
                <Stack direction="row">
                  <Avatar src="" sx={{ width: 48 }} />
                  <Typography ml={12} variant="body2">
                    Courtney Henry <br />
                    MWR GmbH
                  </Typography>
                  <Typography ml={25} mr={21} variant="body2">
                    Creation date: 05.20.2022 <br />
                    Modification date: 04.23.2022
                  </Typography>
                  <IconButton color="default" onClick={handleCloseUserPopover}>
                    <Icon name="x-lg" />
                  </IconButton>
                </Stack>
                <Button>Change Broker</Button>
              </Stack>
            </Popover>
            {form !== null && (
              <Button color="primary" onClick={handleSave}>
                Save
              </Button>
            )}
          </Stack>
        }
      />
      <CardContent>
        <Stack mb={12} direction="row" spacing={8} alignItems="flex-start">
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
              sx={{ width: { xs: 100, sm: 218 }, height: { xs: 78, sm: 168 } }}
            >
              <Icon name="image-fill" />
            </Avatar>
          </Badge>
          <Box>
            <Typography mb={2} variant="h3">
              Brooklyn Simmons
            </Typography>
            <Typography mb={12}>AugustenstraBe 3, 82319, Starnbergv</Typography>
            <Stack
              mb={22}
              spacing={8}
              direction="row"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Chip label="In Progress" />
              <Chip color="success" label="Submission of Indicative Offer" />
            </Stack>
            <Stack
              sx={{ display: { xs: 'none', sm: 'flex' } }}
              direction="row"
              spacing={16}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Box>
                <Typography mb={4} variant="body2">
                  Plot
                </Typography>
                <Typography variant="subtitle1">281 sqm</Typography>
              </Box>
              <Box>
                <Typography mb={4} variant="body2">
                  Living Space
                </Typography>
                <Typography variant="subtitle1">150 sqm</Typography>
              </Box>
              <Box>
                <Typography mb={4} variant="body2">
                  Rooms
                </Typography>
                <Typography variant="subtitle1">6</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Button
          sx={{ display: { xs: 'block', sm: 'none' }, mb: 24 }}
          fullWidth
          onClick={handleOpenExtraInformationModal}
        >
          Show Extra Information
        </Button>
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
          <Tab label={t('objects_detail.personal_data')} />
          <Tab label={t('objects_detail.registration_form')} />
          <Tab label={t('objects_detail.object_properties')} />
          <Tab label={t('objects_detail.modernizations')} />
          <Tab label={t('objects_detail.indicative_offer')} />
          <Tab label={t('objects_detail.files')} />
          <Tab label={t('objects_detail.tasks')} />
        </Tabs>
        <S.TabPanel>
          {activeTab === TabPanels.PersonalData && (
            <PersonalDataPanel setForm={setForm} />
          )}
          {activeTab === TabPanels.IndicativeOffer && <IndicativeOfferPanel />}
          {activeTab === TabPanels.Files && <FilesPanel />}
          {activeTab === TabPanels.Tasks && <TasksPanel />}
        </S.TabPanel>
        <Dialog
          title="Extra Information"
          open={visibleExtraInformationModal}
          onClose={handleCloseExtraInformationModal}
        >
          <Stack mt={-4} mb={16} spacing={8} direction="row">
            <Chip label="In Progress" />
            <Chip color="success" label="Submission of Indicative Offer" />
          </Stack>
          <Stack
            spacing={16}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box>
              <Typography mb={4} variant="body2">
                Plot
              </Typography>
              <Typography variant="subtitle1">281 sqm</Typography>
            </Box>
            <Box>
              <Typography mb={4} variant="body2">
                Living Space
              </Typography>
              <Typography variant="subtitle1">150 sqm</Typography>
            </Box>
            <Box>
              <Typography mb={4} variant="body2">
                Rooms
              </Typography>
              <Typography variant="subtitle1">6</Typography>
            </Box>
          </Stack>
        </Dialog>
      </CardContent>
    </Card>
  );
};
