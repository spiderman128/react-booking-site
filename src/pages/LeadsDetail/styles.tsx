// Dependencies
import styled from 'styled-components';
import { Box, Menu } from '@mui/material';
import { Button } from '../../components';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Export styled components
export const TableWrapper = styled(Box)`
  height: 100%;
  .MuiBox-root {
    height: 100%;

    .MuiTableContainer-root {
      max-height: 100%;

      th {
        border-bottom: 1px solid ${(props) => props.theme.palette.lightCyan};
      }
    }
  }
`;

export const DetailCardHeaderTitle = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StatusMenuButton = styled(Button)`
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: 20px !important;
  padding-right: 10px !important;
  padding-left: 10px !important;
  height: 24px;

  svg {
    margin-left: 8px;
  }
`;

export const StatusMenu = styled(Menu)`
  .MuiPaper-root {
    width: 216px;
    margin-top: 8px;
    padding: 8px;

    .MuiMenuItem-root {
      border-radius: 8px;
      margin-bottom: 4px;
      font-size: 14px;
      line-height: 24px;

      &.active {
        svg {
          fill: #fff;
          margin-left: auto;
          margin-right: 16px;
        }
        &:hover {
          background: ${(props) => props.theme.palette.darkIndigo};
        }
      }
    }
  }
`;

export const Scrollbar = styled(PerfectScrollbar)`
  height: calc(100vh - 304px);

  @media (max-width: 1300px) {
    height: calc(100vh - 356px);
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    height: calc(100vh - 344px);
  }
`;
