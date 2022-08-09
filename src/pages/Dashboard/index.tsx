// Dependencies
import React, { FC, useRef } from 'react';
import { Grid, Stack } from '@mui/material';

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
import { CARD_LAYOUT_SPACING } from '../../constants';
import * as S from './styles';

// Export dashboard page
export const DashboardPage: FC = () => {

  const contentRef = useRef<HTMLDivElement>(null);

  // Return dashboard page
  return (
    <S.Dashboard ref={contentRef}>
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
