// Dependencies
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { BarChart } from '../../../../components/Common/Charts/BarChart';

// Constants
const chartData = [
  { name: 'Comdominium', objects: 1, value: 1139000 },
  { name: 'Delivery Indicative Offer', objects: 4, value: 4139000 },
  { name: 'Assessment', objects: 4, value: 7139000 },
];

// Export object-overview widget
export const ObjectsValueWidget: FC = () => {
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
      <BarChart data={chartData} />
    </Card>
  );
};
