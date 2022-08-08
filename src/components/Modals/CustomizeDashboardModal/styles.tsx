// Dependencies
import styled, { css } from 'styled-components';
import { Box } from '@mui/material';

import { IconButton } from '../../Common';

// Export styled components
export const DashboardContent = styled(Box)`
  margin-top: 20px;
  background-color: ${(props) => props.theme.palette.lightCyan};
  border-radius: 12px;

  & .react-grid-item {
    display: flex;
    flex-direction: column;
  }
`;

export const DashboardPanel = styled(Box)`
  position: relative;
  width: 320px;
  height: 220px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hidden {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.palette.cyan};

    .MuiTypography-root {
      color: ${(props) => props.theme.palette.darkCyan};
    }

    .MuiIconButton-root {
      background-color: white;
    }
  }

  .MuiTypography-root {
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
  }

  .drag-handle {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      cursor: grabbing;
    }
  }

  @media only screen and (max-width: 765px) {
    width: calc(100% - 32px) !important;
    height: 56px !important;
    border-radius: 8px !important;
    justify-content: space-between !important;
    flex-direction: row !important;
    padding: 16px;

    .MuiTypography-root {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }

    .drag-handle {
      justify-content: flex-start;
    }

    ${(props) =>
      css`
        ${PanelToggleButton} {
          top: 10px;
          right: 16px;
        }
      `};
  }
`;

export const PanelToggleButton = styled(IconButton)`
  position: absolute !important;
  top: 16px;
  right: 16px;
`;
