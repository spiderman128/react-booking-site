// Dependencies
import React, { FC, useEffect, useState } from 'react';
import { Avatar, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Chip, DataTable, IColumn, Typography } from '../../../../components';

// Interfaces
import { IBroker, ISortBy, Order } from '../../../../interfaces';

// Constants
const mockData: Partial<IBroker>[] = [
  {
    id: 1,
    photo: '',
    name: 'Andreas Hass',
    address: 'WilhweimstraBe 5, 70182, Stuttgart',
  },
  {
    id: 2,
    photo: '',
    name: 'Andreas Hass',
    address: 'WilhweimstraBe 5, 70182, Stuttgart',
    subStatus: 'Submission of INdicative Offer',
  },
  {
    id: 3,
    photo: '',
    name: 'Kerstin Flscher',
    address: 'Waldring 7, 76133, Stuttgart',
    subStatus: 'Submission of Indicative Offer',
  },
  {
    id: 4,
    photo: '',
    name: 'Courtney Henry',
    address: 'Joh-Seb-Bach Str. 22, 75963, Karlsbad',
    subStatus: 'Submitted',
  },
];

// Export Submitted panel
export const SubmittedPanel: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // States
  const [data, setData] = useState<Partial<IBroker>[]>([]);
  const [sortBy, setSortBy] = useState<ISortBy>({
    field: 'name',
    order: Order.Asc,
  });

  // Sort handler
  const handleSort = (value: ISortBy) => {
    setSortBy(value);
  };

  // Columns
  const columns: IColumn[] = [
    {
      field: 'photo',
      label: t('brokers_detail.photo'),
      sortable: false,
      render: (row) => (
        <Avatar
          src={row.photo}
          sx={{
            my: { xs: 5, sm: 0 },
            width: { xs: 42, sm: 64 },
            height: { xs: 32, sm: 48 },
          }}
        />
      ),
    },
    {
      field: 'name',
      label: t('brokers_detail.name'),
      render: (row) => (
        <Typography variant="body2" fontWeight={500}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: 'address',
      label: t('brokers_detail.address'),
    },
    {
      field: 'subStatus',
      label: t('brokers_detail.sub_status'),
      render: (row) =>
        row.subStatus ? <Chip label={row.subStatus} color="success" /> : '-',
    },
  ];

  // On sortBy changed
  useEffect(() => {
    const newData = mockData.sort((a, b) => {
      let flag = 0;
      if (b[sortBy.field] > a[sortBy.field]) {
        flag = 1;
      }
      if (b[sortBy.field] < a[sortBy.field]) {
        flag = -1;
      }
      return sortBy.order === Order.Asc ? flag : -flag;
    });

    setData(newData);
  }, [sortBy]);

  // Return Submitted
  return (
    <Stack spacing={16}>
      <Typography variant="h3">{t('brokers_detail.submitted')}</Typography>
      <DataTable
        sx={(theme) => ({
          borderTop: `1px solid ${theme.palette['cyan']}`,
        })}
        data={data}
        columns={columns}
        onSort={handleSort}
      />
    </Stack>
  );
};
