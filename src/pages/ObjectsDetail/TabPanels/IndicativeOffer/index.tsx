// Dependencies
import { FC } from 'react';
import { Stack, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Typography } from '../../../../components';

// Constants
const marketData = [
  {
    field: 'Estimated Market Value',
    value: '€229.000',
  },
  {
    field: 'Estimated Market Value sqm',
    value: '€1.527',
  },
  {
    field: 'Estimated Rental Value',
    value: '€1.042',
  },
  {
    field: 'Estimated Rental Value',
    value: '0.95€/m²',
  },
  {
    field: 'Market Value Range',
    value: '€175.000 - €334.000',
  },
];

const marketValues = [
  {
    field: 'Single',
    rental: '',
    value: '€195.000',
  },
  {
    field: 'Medium',
    rental: '',
    value: '€234.000',
  },
];

// Export IndicativeOffer panel
export const IndicativeOfferPanel: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // Return IndicativeOffer panel
  return (
    <>
      <Typography mb={20} variant="h3">
        {t('objects_detail.indicative_offer')}
      </Typography>
      <Stack
        mb={12}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h3">{t('objects_detail.market_data')}</Typography>
        <Typography variant="body2">{t('objects_detail.creation_date')}: 06.30.2022</Typography>
      </Stack>
      <Table>
        <TableBody>
          {marketData.map(({ field, value }, index) => (
            <TableRow key={index}>
              <TableCell>{field}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography mt={40} mb={12} variant="h3">
        {t('objects_detail.market_values_for_different_equipment')}
      </Typography>
      <Table>
        <TableBody>
          {marketValues.map(({ field, rental, value }, index) => (
            <TableRow key={index}>
              <TableCell>{field}</TableCell>
              <TableCell>{rental}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
