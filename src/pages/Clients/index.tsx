// Dependencies
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, MenuItem, Tabs, Tab, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../redux/reducers';
import { ISortBy, Order } from '../../interfaces';
import {
  Button,
  Card,
  DataTable,
  Icon,
  IconButton,
  Input,
  Select,
  Typography,
} from '../../components';
import { LineChart } from '../../components/Common/Charts/LineChart';

// Styles
import * as S from './styles';

// Constants
const tableData = [
  {
    name: 'Andreas Haas',
    photo: '',
    gender: 'Male',
    email: 'guyhaw@gmail.com',
    address: 'Wilhelmstraße 5, 70182, Stuttgart',
  },
  {
    name: 'Savannah Nguyen',
    photo: '',
    gender: 'Female',
    email: 'savannah.nguen@gmail.com',
    address: 'Fiduciastraße 4, 76227, Karlsruhe',
  },
  {
    name: 'Jenny Wilson',
    photo: '',
    gender: 'Female',
    email: 'gennywilson@gmail.com',
    address: 'Waldring 7, 76133, Stuttgart',
  },
  {
    name: 'Andreas Haas',
    photo: '',
    gender: 'Male',
    email: 'guyhaw@gmail.com',
    address: 'Wilhelmstraße 5, 70182, Stuttgart',
  },
  {
    name: 'Andreas Haas',
    photo: '',
    gender: 'Male',
    email: 'guyhaw@gmail.com',
    address: 'Wilhelmstraße 5, 70182, Stuttgart',
  },
  {
    name: 'Savannah Nguyen',
    photo: '',
    gender: 'Female',
    email: 'savannah.nguen@gmail.com',
    address: 'Fiduciastraße 4, 76227, Karlsruhe',
  },
  {
    name: 'Jenny Wilson',
    photo: '',
    gender: 'Female',
    email: 'gennywilson@gmail.com',
    address: 'Waldring 7, 76133, Stuttgart',
  },
  {
    name: 'Andreas Haas',
    photo: '',
    gender: 'Male',
    email: 'guyhaw@gmail.com',
    address: 'Wilhelmstraße 5, 70182, Stuttgart',
  },
  {
    name: 'Savannah Nguyen',
    photo: '',
    gender: 'Female',
    email: 'savannah.nguen@gmail.com',
    address: 'Fiduciastraße 4, 76227, Karlsruhe',
  },
  {
    name: 'Jenny Wilson',
    photo: '',
    gender: 'Female',
    email: 'gennywilson@gmail.com',
    address: 'Waldring 7, 76133, Stuttgart',
  },
];

const totalClientsChartData = [
  { month: 1, value: 50 },
  { month: 2, value: 60 },
  { month: 3, value: 110 },
  { month: 4, value: 45 },
  { month: 5, value: 60 },
  { month: 6, value: 186 },
  { month: 7, value: 120 },
  { month: 8, value: 45 },
  { month: 9, value: 55 },
  { month: 10, value: 100 },
  { month: 11, value: 80 },
  { month: 12, value: 175 },
];

const newClientsChartData = [
  { date: 1, value: 60 },
  { date: 2, value: 20 },
  { date: 3, value: 45 },
  { date: 4, value: 60 },
  { date: 5, value: 86 },
  { date: 6, value: 20 },
  { date: 7, value: 45 },
  { date: 8, value: 55 },
  { date: 9, value: 10 },
  { date: 10, value: 80 },
  { date: 12, value: 15 },
  { date: 13, value: 35 },
  { date: 14, value: 45 },
  { date: 15, value: 55 },
  { date: 16, value: 15 },
  { date: 17, value: 25 },
  { date: 18, value: 79 },
  { date: 19, value: 65 },
  { date: 20, value: 55 },
  { date: 21, value: 35 },
  { date: 22, value: 95 },
  { date: 23, value: 5 },
  { date: 24, value: 45 },
  { date: 25, value: 65 },
  { date: 26, value: 25 },
  { date: 27, value: 35 },
  { date: 28, value: 75 },
  { date: 29, value: 85 },
  { date: 30, value: 55 },
];

// Export clients page
export const ClientsPage: FC = () => {
  const { t } = useTranslation();
  const isDrawerOpened = useSelector(
    ({ uiReducer: { isDrawerOpened } }: RootState) => isDrawerOpened
  );

  // Status
  const [tab, setTab] = useState(0);
  const [filterBy, setFilterBy] = useState('filter');
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<ISortBy>({
    field: 'name',
    order: Order.Asc,
  });

  // Filter change handler
  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  // Delete handler
  const handleDelete = (id) => {
    console.log(id);
  };

  // Sort handler
  const handleSort = (value: ISortBy) => {
    setSortBy(value);
  };

  // Page change handler
  const handlePageChange = (value: number) => {
    setPage(value);
  };

  // Rows per page change handler
  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
  };

  // Handle change tab
  const handleChangeTab = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  // Columns
  const columns = [
    {
      field: 'photo',
      numeric: false,
      label: t('clients.photo'),
      sortable: false,
      render: (row) => <Avatar src={row.photo} />,
    },
    {
      field: 'name',
      numeric: false,
      label: t('clients.name'),
      render: (row) => (
        <Typography variant="body2" fontWeight={500}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: 'address',
      numeric: false,
      label: t('clients.address'),
    },
    {
      field: 'gender',
      numeric: false,
      label: t('clients.gender'),
    },
    {
      field: 'email',
      numeric: false,
      label: t('clients.email'),
    },
  ];

  // Row actions
  const rowActions = [
    {
      icon: 'user',
      label: t('clients.assign_broker'),
      onClick: () => {},
    },
    {
      icon: 'add',
      label: t('clients.create_customer'),
      onClick: () => {},
    },
    {
      icon: 'trash',
      label: t('clients.delete'),
      onClick: handleDelete,
    },
  ];

  // On page, sortBy and rowsPerPage changed
  useEffect(() => {
    const skip = rowsPerPage * (page - 1);
    const newData = tableData
      .sort((a, b) => {
        let flag = 0;
        if (b[sortBy.field] > a[sortBy.field]) {
          flag = 1;
        }
        if (b[sortBy.field] < a[sortBy.field]) {
          flag = -1;
        }
        return sortBy.order === Order.Asc ? flag : -flag;
      })
      .filter((_, index) => index >= skip && index < rowsPerPage * page);

    setData(newData);
    setTotalPage(Math.ceil(tableData.length / rowsPerPage));
  }, [page, sortBy, rowsPerPage]);

  // Return clients page
  return (
    <>
      <S.TabPaper>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
        >
          <Tab label={t('clients.clients')} />
          <Tab label={t('clients.analytics')} />
        </Tabs>
      </S.TabPaper>

      {tab === 0 && (
        <Card
          headerdivider
          contentHeight="100%"
          contentPadding={0}
          sx={{
            height: 'auto',
            width: `calc(100vw - 72px ${!isDrawerOpened ? '- 256px' : '88px'})`,
          }}
          title={
            <>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Input
                  startAdornment={<Icon name="search" />}
                  placeholder={t('clients.search')}
                />
              </Box>
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <IconButton>
                  <Icon name="search" />
                </IconButton>
              </Box>
            </>
          }
          action={
            <>
              <Select
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                value={filterBy}
                onChange={handleFilterChange}
              >
                <MenuItem value="filter">{t('clients.filter')}</MenuItem>
              </Select>
              <Button startIcon={<Icon name="box-arrow-up" />}>
                {t('clients.export_clients')}
              </Button>
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <IconButton>
                  <Icon name="funnel-fill" />
                </IconButton>
              </Box>
            </>
          }
        >
          <DataTable
            data={data}
            columns={columns}
            columnEditable
            rowActions={rowActions}
            rowSelectable
            paginated
            page={page}
            totalPage={totalPage}
            rowsPerPage={rowsPerPage}
            stickyHeader
            contentSize={{ height: 'calc(100vh - 420px)' }}
            onSort={handleSort}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </Card>
      )}

      {tab === 1 && (
        <Grid container columns={2} spacing={12}>
          <Grid item xs={2} md={1}>
            <Card
              sx={{ height: '332px' }}
              title={t('clients.total_clients')}
              action={
                <Select value="last year">
                  <MenuItem value="last year">{t('clients.last_year')}</MenuItem>
                </Select>
              }
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                mb={12}
              >
                <Typography sx={{ mr: 12 }}>{t('clients.total_clients')}</Typography>
                <S.ChartInfoLabel color="#799FE5">1.168</S.ChartInfoLabel>
              </Box>
              <LineChart
                title="Clients"
                data={totalClientsChartData}
                lineColor="#799FE5"
              />
            </Card>
          </Grid>
          <Grid item xs={2} md={1}>
            <Card
              sx={{ height: '332px' }}
              title={t('clients.new_clients')}
              action={
                <Select value="last month">
                  <MenuItem value="last month">{t('clients.last_month')}</MenuItem>
                </Select>
              }
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                mb={12}
              >
                <Typography sx={{ mr: 12 }}>March</Typography>
                <S.ChartInfoLabel color="#4ED2A2">+2.8%</S.ChartInfoLabel>
              </Box>
              <LineChart
                title={t('clients.new_clients')}
                month="March"
                data={newClientsChartData}
                lineColor="#4ED2A2"
              />
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};
