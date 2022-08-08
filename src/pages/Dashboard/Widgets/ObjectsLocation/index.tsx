// Dependencies
import React, { FC } from 'react';
import { MenuItem, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import MapArea from '../../../../components/Common/MapArea';
import { Card } from '../../../../components';
import { Button, Icon, Select } from '../../../../components';

import * as S from './styles';

// Export object-location widget
export const ObjectsLocationWidget: FC = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  // Return object-overview widget
  return (
    <Card
      title={t('dashboard.objects_location')}
      action={
        <>
          <S.FilterIconButton
            className={!!anchorEl ? 'active' : ''}
            onClick={handleFilterClick}
          >
            <Icon name="funnel-fill" />
          </S.FilterIconButton>
          <S.Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <S.FilterPopover>
              <Stack direction="row" justifyContent="space-between" mb={12}>
                <Typography variant="h3">{t('dashboard.filter')}</Typography>
                <Button>{t('dashboard.apply_filter')}</Button>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={33}
                mb={4}
              >
                <S.SelectWrapper>
                  <Typography variant="body2" mb={4}>
                    {t('dashboard.by_state')}
                  </Typography>
                  <Select value="All State">
                    <MenuItem value="All State">{t('dashboard.all_state')}</MenuItem>
                  </Select>
                </S.SelectWrapper>
                <S.SelectWrapper>
                  <Typography variant="body2" mb={4}>
                    {t('dashboard.by_city')}
                  </Typography>
                  <Select value="Berline">
                    <MenuItem value="Berline">{t('dashboard.berlin')}</MenuItem>
                  </Select>
                  <S.ClearButton variant="subtitle2" align="right">
                    {t('dashboard.clear')}
                  </S.ClearButton>
                </S.SelectWrapper>
              </Stack>
              <Stack direction="row">
                <S.SelectWrapper>
                  <Typography variant="body2" mb={4}>
                    {t('dashboard.by_name')}
                  </Typography>
                  <Select value="Cody Fisher">
                    <MenuItem value="Cody Fisher">{t('dashboard.cody_fisher')}</MenuItem>
                  </Select>
                  <S.ClearButton variant="subtitle2" align="right">
                    {t('dashboard.clear')}
                  </S.ClearButton>
                </S.SelectWrapper>
              </Stack>
            </S.FilterPopover>
          </S.Popover>
        </>
      }
    >
      <S.MapBoxWrapper>
        <MapArea />
      </S.MapBoxWrapper>
    </Card>
  );
};
