// Dependencies
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';
import { PieChart } from '../../../../components/Common/Charts/PieChart';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

// Constants
const chartData = [
  { name: 'Comdominium', value: 60 },
  { name: 'Apartment', value: 10 },
  { name: 'Detached House', value: 8 },
  { name: 'Semi-Detached House', value: 8 },
  { name: 'Detached House with Granny Flat', value: 7 },
  { name: 'Unknown', value: 7 },
];

// Export object-overview widget
export const ObjectsOverviewWidget: FC = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState('last month');

  // Date change handler
  const handleChangeDate = (e: SelectChangeEvent) => {
    setDate(e.target.value);
  };

  // Return object-overview widget
  return (
    <Card
      title={t('dashboard.objects_overview')}
      action={
        <Select value={date} onChange={handleChangeDate}>
          <MenuItem value="last month">{t('dashboard.last_month')}</MenuItem>
          <MenuItem value="this month">{t('dashboard.this_month')}</MenuItem>
        </Select>
      }
    >
      <PieChart data={chartData} />
    </Card>
  );
};
