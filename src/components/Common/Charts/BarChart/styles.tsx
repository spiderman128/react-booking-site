// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const BarChartWrapper = styled(Box)`
  .highcharts-container {
    margin: 0 auto;

    .bar-chart-tooltip {
      background: #fff;
      box-shadow: 0 0 12px rgba(85, 101, 129, 0.1);
      border-radius: 8px;
      padding: 12px 16px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      > div:last-child {
        margin-top: 7.25px;
        display: flex;
        align-items: center;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const LegendWrapper = styled(Box)`
  margin-top: 10px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1440px) {
    padding: 0 12px;
  }

  .legend-item {
    flex: auto;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
    cursor: pointer;

    @media only screen and (max-width: 1440px) {
      flex: auto;
      font-size: 12px;
      line-height: 20px;
    }

    @media only screen and (max-width: 765px) {
      flex: auto;
      font-size: 10px;
      line-height: 16px;
    }

    .legend-label {
      p {
        margin: 0;
        &:last-child {
          color: ${(props) => props.theme.palette.text.secondary};
        }
      }
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
