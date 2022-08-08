// Dependencies
import styled from 'styled-components';
import { TextField } from '@mui/material';

// Export styled components
export const FormInput = styled(TextField)`
  width: 100%;
  border: none !important;
  outline: none !important;
  .MuiOutlinedInput-root {
    border-radius: 8px;
    font-size: 16px;
    min-height: 44px;
    line-height: 24px;
    padding: 10px 12px;
    
    input {
      padding-left: 0;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.palette.lightCyan} !important;
    }
  }
`;