// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const PieChartWrapper = styled(Box)`
  .highcharts-container {
    margin: 0 auto;

    .centered-title {
      text-align: center;
      font-size: 34px;
      font-weight: 600;
      line-height: 48px;
      color: ${(props) => props.theme.palette.text.primary};

      @media only screen and (max-width: 765px) {
        font-size: 23px;
        line-height: 33px;
      }

      p {
        margin: 0;
        &:last-child {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: ${(props) => props.theme.palette.text.secondary};

          @media only screen and (max-width: 765px) {
            font-size: 8.215px;
            line-height: 14px;
          }
        }
      }
    }

    .tooltip {
      box-shadow: 0px 0px 12px rgba(85, 101, 129, 0.1);
    }

    .pie-chart-tooltip {
      background: #fff;
      box-shadow: 0 0 12px rgba(85, 101, 129, 0.1);
      border-radius: 8px;
      padding: 12px 16px;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const LegendWrapper = styled(Box)`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;

  .legend-item {
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
    cursor: pointer;

    @media only screen and (max-width: 765px) {
      font-size: 10px;
      line-height: 16px;
    }

    .legend-symbol {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      border-radius: 4px;

      @media only screen and (max-width: 765px) {
        width: 12px;
        height: 12px;
      }
    }

    &.disabled {
      color: ${(props) => props.theme.palette.text.secondary};

      .legend-symbol {
        background-color: ${(props) =>
          props.theme.palette.lightCyan} !important;
      }
    }
  }
`;
