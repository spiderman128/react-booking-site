// Dependencies
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Constants
import { ROUTES } from '../../constants';

// Interfaces
import { ISortBy, Order } from '../../interfaces';

// Components
import {
  Card,
  Chip,
  DataTable,
  Icon,
  IconButton,
  Input,
  Select,
  Typography,
} from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

// Interfaces
import { IColumn } from '../../components';

const tableData = [
  {
    name: 'Andreas Haas',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Kerstin Fischer',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Courtney Henry',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Devon Lane',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Kristin Watson',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Brooklyn Simmons',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Ralph Edwards',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Jasob',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'KitKat',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Lollipop',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Marshmallow',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Nougat',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Oreo',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
];

// Export leads page
export const LeadsPage: FC = () => {
  const { t } = useTranslation();
  const isDrawerOpened = useSelector(
    ({ uiReducer: { isDrawerOpened } }: RootState) => isDrawerOpened
  );


// Constants
  const columns: IColumn[] = [
    {
      field: 'name',
      label: t('leads.name'),
      render: (row) => (
        <Typography variant="body2" fontWeight={500}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: 'phone',
      label: t('leads.phone'),
    },
    {
      field: 'gender',
      label: t('leads.gender'),
    },
    {
      field: 'propertyType',
      label: t('leads.property_type'),
    },
    {
      field: 'status',
      label: t('leads.status'),
      render: (row) => <Chip label={row.status} />,
    },
    {
      field: 'date',
      label: t('leads.date'),
    },
  ];

  // Status
  const [filterBy, setFilterBy] = useState('filter');
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<ISortBy>({
    field: 'name',
    order: Order.Asc,
  });

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Get navigate from hook
  const navigate = useNavigate();

  // Filter change handler
  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  // Go to detail
  const handleGoToDetail = (id) => {
    navigate(`${ROUTES.LEADS.PREFIX}/${id}/detail`);
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

  // Row actions
  const rowActions = [
    {
      icon: 'document',
      label: t('leads.details'),
      onClick: handleGoToDetail,
    },
    {
      icon: 'user',
      label: t('leads.assign_broker'),
      onClick: () => {},
    },
    {
      icon: 'add',
      label: t('leads.create_customer'),
      onClick: () => {},
    },
    {
      icon: 'trash',
      label: t('leads.delete'),
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

  // Return leads page
  return (
    <Card
      headerDivider
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
              placeholder={t('leads.search')}
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
            <MenuItem value="filter">{t('leads.filter')}</MenuItem>
          </Select>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton>
              <Icon name="funnel-fill" />
            </IconButton>
          </Box>
        </>
      }
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
                height: 'calc(100vh - 312px)',
              }
        }
        onSort={handleSort}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onRowClick={handleGoToDetail}
      />
    </Card>
  );
};
