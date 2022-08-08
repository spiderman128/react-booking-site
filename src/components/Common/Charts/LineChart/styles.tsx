// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const LineChartWrapper = styled(Box)`
  .highcharts-container {
    margin: 0 auto;

    .line-chart-tooltip {
      background: #fff;
      box-shadow: 0 0 12px rgba(85, 101, 129, 0.1);
      border-radius: 8px;
      padding: 8px 12px;
      font-family: 'Work Sans';
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: ${(props) => props.theme.palette.darkIndigo};

      > div.date {
        font-size: 12px;
        line-height: 20px;
        color: ${(props) => props.theme.palette.lightIndigo};
      }
    }
  }
`;
