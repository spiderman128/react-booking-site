// Dependencies
import React, { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

import * as S from './styles';

export const LoadingContainer: FC = () => {
  return (
    <Box height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <S.Logo src="/assets/images/logo.svg" alt="logo" />
      <CircularProgress />
    </Box>
  )
};