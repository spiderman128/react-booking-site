// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const CarouselWrapper = styled(Box)`
  .owl-stage-outer {
    min-height: 228px !important;
  }

  .owl-dots {
    margin-top: 0 !important;
    .owl-dot {
      span {
        width: 8px !important;
        height: 8px !important;
        background-color: ${(props) => props.theme.palette.cyan} !important;
      }

      &.active {
        span {
          background-color: ${(props) =>
            props.theme.palette.lightIndigo} !important;
        }
      }
    }
  }
`;
