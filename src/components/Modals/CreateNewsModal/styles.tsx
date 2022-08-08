// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const FormWrapper = styled(Box)`
  .MuiInputBase-root {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
  }

  .MuiInputBase-multiline {
    height: 272px;
    .MuiInputBase-input {
      &:first-child {
        height: 100% !important;
      }
    }
  }
`;
