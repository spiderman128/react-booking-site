// Dependencies
import styled from 'styled-components';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';

// Export styled components
export const ToggleButtonGroup = styled(MuiToggleButtonGroup)`
  && {
    padding: 4px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.lightCyan};

    .MuiToggleButton-root {
      border-radius: 6px !important;
      padding: 2px;
      width: 28px;
      height: 28px;

      &:not(:first-child) {
        margin-left: 2px;
      }
    }
  }
`;
