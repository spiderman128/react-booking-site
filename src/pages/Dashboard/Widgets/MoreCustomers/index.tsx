// Dependencies
import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';

import * as S from './styles';

// Export more-customers widget
export const MoreCustomersWidget: FC = () => {
  const { t } = useTranslation();

  // Return more-customers widget
  return (
    <Card
      title={t('dashboard.get_more_customers')}
      titleColor='#B1E5FC'
    >
      <div className='py-3 font-size-15 text-secondary'>{t('dashboard.get_more_customers_description')}</div>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <S.SocialButton><i className='fa fa-facebook me-3'/>Facebook</S.SocialButton>
        </Grid>
        <Grid item xs={4}>
          <S.SocialButton><i className='fa fa-twitter me-3'/>Twitter</S.SocialButton>
        </Grid>
        <Grid item xs={4}>
          <S.SocialButton><i className='fa fa-instagram me-3'/>Instagram</S.SocialButton>
        </Grid>
      </Grid>
    </Card>
  );
};
