// Dependencies
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { BarChart } from '../../../../components/Common/Charts/BarChart';

// Constants
const chartData = [
  { name: '22', value: 27 },
  { name: '23', value: 21 },
  { name: '24', value: 30 },
  { name: '25', value: 20 },
  { name: '26', value: 26 },
  { name: '27', value: 15 },
  { name: '28', value: 22 },
];

// Export object-overview widget
export const ProductViewsWidget: FC = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState('last 7 days');

  // Date change handler
  const handleChangeDate = (e: SelectChangeEvent) => {
    setDate(e.target.value);
  };

  // Return object-overview widget
  return (
    <Card
      title={t('dashboard.product_views')}
      titleColor="#CABDFF"
      action={
        <Select value={date} onChange={handleChangeDate}>
          <MenuItem value="last 7 days">{t('dashboard.last_7_days')}</MenuItem>
        </Select>
      }
    >
      <BarChart data={chartData} />
    </Card>
  );
};
