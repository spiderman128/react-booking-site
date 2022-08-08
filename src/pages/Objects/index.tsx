// Dependencies
import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Stack,
  ToggleButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// Components
import {
  Button,
  Chip,
  DataTable,
  IColumn,
  Icon,
  IconButton,
  Input,
  Select,
  Typography,
} from '../../components';
import { ObjectPanel } from './ObjectPanel';

// Styles
import * as S from './styles';

// Global constants
import { ROUTES } from '../../constants';

// Store
import { RootState } from '../../redux/reducers';

// Interfaces
import { IObject, ISortBy, Order } from '../../interfaces';

enum ViewMode {
  List = 'list',
  Panel = 'panel',
}

// Constants
const mockData: IObject[] = [
  {
    id: 1,
    photo: '',
    name: 'Andreas Hass',
    email: 'guyhaw@gmail.com',
    address: 'WilhweimstraBe 5, 70182, Stuttgart',
    status: 'New',
  },
  {
    id: 2,
    photo: '',
    name: 'Andreas Hass',
    email: 'guyhaw@gmail.com',
    address: 'WilhweimstraBe 5, 70182, Stuttgart',
    status: 'New',
    subStatus: 'Submission of INdicative Offer',
  },
  {
    id: 3,
    photo: '',
    name: 'Kerstin Flscher',
    email: 'guyhaw@gmail.com',
    address: 'Waldring 7, 76133, Stuttgart',
    status: 'In Progress',
    subStatus: 'Submission of Indicative Offer',
  },
  {
    id: 4,
    photo: '',
    name: 'Courtney Henry',
    email: 'guyhaw@gmail.com',
    address: 'Joh-Seb-Bach Str. 22, 75963, Karlsbad',
    status: 'In Progress',
    subStatus: 'Submitted',
  },
  {
    id: 5,
    photo: '',
    name: 'Devon Lane',
    email: 'guyhaw@gmail.com',
    address: 'FiduclastraBe 4, 76227, Karlsruche',
    status: 'In Progress',
    subStatus: 'Submitted',
  },
  {
    id: 6,
    photo: '',
    name: 'Kristin Watson',
    email: 'guyhaw@gmail.com',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
    status: 'In Progress',
    subStatus: 'Document',
  },
  {
    id: 7,
    photo: '',
    name: 'Kristin Watson',
    email: 'guyhaw@gmail.com',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
    status: 'In Progress',
    subStatus: 'Document',
  },
  {
    id: 8,
    photo: '',
    name: 'Courtney Henry',
    email: 'guyhaw@gmail.com',
    address: 'Joh-Seb-Bach Str. 22, 75963, Karlsbad',
    status: 'Rejected',
    subStatus: 'Submitted',
  },
  {
    id: 9,
    photo: '',
    name: 'Devon Lane',
    email: 'guyhaw@gmail.com',
    address: 'FiduclastraBe 4, 76227, Karlsruche',
    status: 'Bounce',
    subStatus: 'Submitted',
  },
  {
    id: 10,
    photo: '',
    name: 'Kristin Watson',
    email: 'guyhaw@gmail.com',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
    status: 'Bounce',
    subStatus: 'Document',
  },
  {
    id: 11,
    photo: '',
    name: 'Kristin Watson',
    email: 'guyhaw@gmail.com',
    address: 'WilhelmstraBe 5, 70182, Stuttgart',
    status: 'Bounce',
    subStatus: 'Document',
  },
];

const statuses = ['New', 'In Progress', 'Rejected', 'Bounce'];

// Export objects page
export const ObjectsPage: FC = () => {
  // Get translations from hook
  const { t } = useTranslation();

  // States
  const [filterBy, setFilterBy] = useState('status');
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Panel);
  const [data, setData] = useState<IObject[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<ISortBy>({
    field: 'name',
    order: Order.Asc,
  });
  const [objects, setObjects] = useState<IObject[]>(mockData);

  // Get board data
  const boardData = useMemo(() => {
    return statuses.map((status) => {
      return {
        status,
        objects: objects.filter((object) => object.status === status),
      }
    });
  }, [objects]);

  // Theme
  const theme = useTheme();

  // Get drawer status from store
  const isDrawerOpened = useSelector(
    ({ uiReducer: { isDrawerOpened } }: RootState) => isDrawerOpened
  );

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Get navigate from hook
  const navigate = useNavigate();

  // Change filter by handler
  const handleFilterChange = (event) => {
    setFilterBy(event.currentTarget.value);
  };

  // Change view mode handler
  const handleChangeViewMode = (_, viewMode: ViewMode) => {
    setViewMode(viewMode);
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
    navigate(ROUTES.OBJECTS.DETAIL);
  };

  // Delete handler
  const handleDelete = (id) => {
    console.log(id);
  };

  // Columns
  const columns: IColumn[] = [
    {
      field: 'photo',
      label: t('objects.photo'),
      sortable: false,
      render: (row) => <Avatar src={row.photo} />,
    },
    {
      field: 'name',
      label: t('objects.name'),
      render: (row) => (
        <Typography variant="body2" fontWeight={500}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: 'email',
      label: t('objects.email'),
      visible: false,
    },
    {
      field: 'address',
      label: t('objects.address'),
    },
    {
      field: 'status',
      label: t('objects.status'),
      render: (row) => <Chip label={row.status} />,
    },
    {
      field: 'subStatus',
      label: t('objects.sub_status'),
      render: (row) =>
        row.subStatus ? <Chip label={row.subStatus} color="success" /> : '-',
    },
  ];

  // Row actions
  const rowActions = [
    {
      icon: 'document',
      label: t('objects.details'),
      onClick: handleGoToDetail,
    },
    {
      icon: '',
      label: t('objects.send_message'),
      onClick: () => {},
    },
    {
      icon: 'trash',
      label: t('objects.delete'),
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

  // Return objects page
  return (
    <Card sx={{ height: isMobile ? 'auto' : '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        sx={{ pt: 22, pb: 20 }}
        title={
          <>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Input
                startAdornment={<Icon name="search" />}
                placeholder={t('objects.search')}
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
            <S.ToggleButtonGroup
              exclusive
              value={viewMode}
              size="small"
              onChange={handleChangeViewMode}
            >
              <ToggleButton value={ViewMode.List}>
                <Icon name="menu" />
              </ToggleButton>
              <ToggleButton value={ViewMode.Panel}>
                <Icon name="panel" />
              </ToggleButton>
            </S.ToggleButtonGroup>
            <Select
              sx={{ display: { xs: 'none', md: 'flex' } }}
              value={filterBy}
              onChange={handleFilterChange}
            >
              <MenuItem value="status">{t('objects.filter_by_status')}</MenuItem>
            </Select>
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
              <Icon name="funnel-fill" />
            </IconButton>
            <Button startIcon={!isMobile && <Icon name="" />}>
              {t('objects.export_objects')}
            </Button>
          </Stack>
        }
      />
      {viewMode === ViewMode.List ? (
        <CardContent
          sx={(theme) => ({
            p: '0 !important',
            // @ts-ignore
            borderTop: `1px solid ${theme.palette.lightCyan}`,
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
      ) : (
        <CardContent sx={{ p: 20, pt: 0, flex: 1 }}>
          <ObjectPanel data={boardData} objects={objects} setObjects={setObjects} />
        </CardContent>
      )}
    </Card>
  );
};
