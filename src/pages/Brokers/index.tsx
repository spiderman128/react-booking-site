// Dependencies
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Stack,
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
  Select,
  Typography,
} from '../../components';

// Interfaces
import { RootState } from '../../redux/reducers';
import { IBroker, ISortBy, Order } from '../../interfaces';

// Global constants
import { ROUTES } from '../../constants';

// Constants
const mockData: IBroker[] = [
  {
    id: 1,
    photo: '',
    name: 'Andreas Hass',
    company: 'MWR GmbH',
    address: 'WilhweimstraBe 5, 70182, Stuttgart',
  },
  {
    id: 2,
    photo: '',
    name: 'Andreas Hass',
    company: 'Garant Immobilien',
    address: 'WilhweimstraBe 5, 70182, Stuttgart',
  },
  {
    id: 3,
    photo: '',
    name: 'Kerstin Flscher',
    company: 'Garant Immobilien',
    address: 'Waldring 7, 76133, Stuttgart',
  },
  {
    id: 4,
    photo: '',
    name: 'Courtney Henry',
    company: 'MWR GmbH',
    address: 'Joh-Seb-Bach Str. 22, 75963, Karlsbad',
  },
  {
    id: 5,
    photo: '',
    name: 'Devon Lane',
    company: 'Garant',
    address: 'FiduclastraBe 4, 76227, Karlsruche',
  },
  {
    id: 6,
    photo: '',
    name: 'Kristin Watson',
    company: 'Garant',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
  },
  {
    id: 7,
    photo: '',
    name: 'Kristin Watson',
    company: 'MWR GmbH',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
  },
  {
    id: 8,
    photo: '',
    name: 'Courtney Henry',
    company: 'Garant',
    address: 'Joh-Seb-Bach Str. 22, 75963, Karlsbad',
  },
  {
    id: 9,
    photo: '',
    name: 'Devon Lane',
    company: 'Garant',
    address: 'FiduclastraBe 4, 76227, Karlsruche',
  },
  {
    id: 10,
    photo: '',
    name: 'Kristin Watson',
    company: 'MWR GmbH',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
  },
  {
    id: 11,
    photo: '',
    name: 'Kristin Watson',
    company: 'MWR GmbH',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
  },
];

// Export brokers page
export const BrokersPage: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // States
  const [filterBy, setFilterBy] = useState('filter');
  const [data, setData] = useState<IBroker[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<ISortBy>({
    field: 'name',
    order: Order.Asc,
  });

  // Theme
  const theme = useTheme();

  // Get navigate from hook
  const navigate = useNavigate();

  // Get drawer status from store
  const isDrawerOpened = useSelector(
    ({ uiReducer: { isDrawerOpened } }: RootState) => isDrawerOpened
  );

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Filter change handler
  const handleFilterChange = (event) => {
    setFilterBy(event.currentTarget.value);
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
    setPage(1);
  };

  // Go to detail handler
  const handleGoToDetail = () => {
    navigate(ROUTES.BROKERS.DETAIL);
  };

  // Delete handler
  const handleDelete = (id) => {
    console.log(id);
  };

  // Columns
  const columns: IColumn[] = [
    {
      field: 'photo',
      label: t('brokers.photo'),
      sortable: false,
      render: (row) => <Avatar src={row.photo} variant="square" />,
    },
    {
      field: 'name',
      label: t('brokers.name'),
      render: (row) => (
        <Typography variant="body2" fontWeight={500}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: 'company',
      label: t('brokers.company'),
    },
    {
      field: 'address',
      label: t('brokers.address'),
    },
  ];

  // Row actions
  const rowActions = [
    {
      icon: 'document',
      label: t('brokers.details'),
      onClick: handleGoToDetail,
    },
    {
      icon: 'trash',
      label: t('brokers.delete'),
      onClick: handleDelete,
    },
  ];

  // On page, sortBy and rowsPerPage changed
  useEffect(() => {
    const skip = rowsPerPage * (page - 1);
    const newData = mockData
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
    setTotalPage(Math.ceil(mockData.length / rowsPerPage));
  }, [page, sortBy, rowsPerPage]);

  // Return brokers page
  return (
    <Card>
      <CardHeader
        sx={{ pt: { sm: 22 }, pb: { xs: 18, sm: 20 }, px: { xs: 16, sm: 20 } }}
        title={
          <>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Input
                startAdornment={<Icon name="search" />}
                placeholder={t('brokers.search')}
              />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton>
                <Icon name="search" />
              </IconButton>
            </Box>
          </>
        }
        action={
          <Stack direction="row" spacing={{ xs: 10, md: 12 }}>
            <Select
              sx={{ display: { xs: 'none', md: 'flex' } }}
              value={filterBy}
              onChange={handleFilterChange}
            >
              <MenuItem value="filter">{t('brokers.filter')}</MenuItem>
            </Select>
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
              <Icon name="funnel-fill" />
            </IconButton>
            <Button startIcon={!isMobile && <Icon name="plus-lg" />}>
              {t('brokers.new_broker')}
            </Button>
          </Stack>
        }
      />
      <CardContent
        sx={(theme) => ({
          p: '0 !important',
          borderTop: `1px solid ${theme.palette['lightCyan']}`,
        })}
      >
        <DataTable
          paginated
          rowSelectable
          columnEditable
          page={page}
          data={data}
          columns={columns}
          totalPage={totalPage}
          rowActions={rowActions}
          rowsPerPage={rowsPerPage}
          stickyHeader
          contentSize={
            isMobile
              ? { width: 'calc(100vw - 32px)' }
              : {
                  width: isDrawerOpened
                    ? 'calc(100vw - 160px)'
                    : 'calc(100vw - 328px)',
                  height: 'calc(100vh - 320px)',
                }
          }
          onSort={handleSort}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </CardContent>
    </Card>
  );
};
