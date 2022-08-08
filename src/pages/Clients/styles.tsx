// Dependencies
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Typography } from '../../components';

// Export styled components
export const TabPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 16px;
`;

export const ChartInfoLabel = styled(Typography)`
  font-weight: 600 !important;
  font-size: 34px !important;
  line-height: 48px !important;

  @media only screen and (max-width: 600px) {
    font-size: 24px !important;
    line-height: 36px !important;
    margin-right: 12px !important;
  }
`;
