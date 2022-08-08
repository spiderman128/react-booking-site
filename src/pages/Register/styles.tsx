// Dependencies
import styled from 'styled-components';
import { Box, Card as MuiCard, Alert as MuiAlert } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.lightCyan};
  padding: 40px 0;
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

export const Alert = styled(MuiAlert)`
  background: ${(props) => props.theme.palette.success.lightCyan} !important;
  margin-bottom: 16px;
`;