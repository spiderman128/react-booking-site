// Dependencies
import styled from 'styled-components';
import { Box, Card as MuiCard, TextField } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.lightCyan};
`;

export const Card = styled(MuiCard)`
  padding: 32px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Box)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 130px;
  height: auto;
  margin-bottom: 16px;
`;

export const FormWrapper = styled(Box)`
  width: 100%
`;

export const FormInput = styled(TextField)`
  width: 100%;
  border: none !important;
  outline: none !important;
  .MuiOutlinedInput-root {
    border-radius: 8px;
    font-size: 16px;
    min-height: 60px;
    line-height: 24px;
    padding: 10px 12px;
    
    &:not(&.Mui-error) {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.palette.lightCyan} !important;
      }
    }
  }
`;

