// Dependencies
import React, { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Widgets
import {
  CommentsWidget,
  MoreCustomersWidget,
  OverviewWidget,
  PopularProductsWidget,
  ProductViewsWidget,
  ProtipsWidget,
  RefundRequestsWidget,
} from './Widgets';
import { Grid, Stack } from '@mui/material';

// Styles
import * as S from './styles';

// Constants
import { CARD_LAYOUT_SPACING } from '../../constants';

// Export dashboard page
export const DashboardPage: FC = () => {

  const contentRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  // Return dashboard page
  return (
    <S.Dashboard ref={contentRef}>
      <h3 className='mb-3 fw-bold'>{t('page_title.dashboard')}</h3>
      <Grid container spacing={CARD_LAYOUT_SPACING.row}>

        {/* LEFT SIDE WIDGET LIST */}
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Stack spacing={CARD_LAYOUT_SPACING.column}>
            <OverviewWidget />
            <ProductViewsWidget />
            <ProtipsWidget />
            <MoreCustomersWidget />
          </Stack>
        </Grid>

        {/* RIGHT SIDE WIDGET LIST */}
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Stack spacing={CARD_LAYOUT_SPACING.column}>
            <PopularProductsWidget />
            <CommentsWidget />
            <RefundRequestsWidget />
          </Stack>
        </Grid>
      </Grid>
    </S.Dashboard>
  );
};
