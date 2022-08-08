// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const StepItem = styled(Box)<{
  active: boolean;
  passed: boolean;
}>`
  width: 48px;
  height: 48px;
  background: ${(props) =>
    props.passed
      ? props.theme.palette.darkIndigo
      : props.theme.palette.lightCyan};
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.active
        ? props.theme.palette.lightIndigo
        : props.passed
        ? props.theme.palette.darkIndigo
        : props.theme.palette.lightCyan};
  color: ${(props) =>
    props.active
      ? props.theme.palette.darkIndigo
      : props.passed
      ? props.theme.palette.common.white
      : props.theme.palette.darkCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  cursor: pointer;

  @media only screen and (max-width: 992px) {
    width: 36px;
    height: 36px;
  }

  @media only screen and (max-width: 600px) {
    flex: 1;
    height: 4px;
    background: ${(props) =>
      props.passed || props.active
        ? props.theme.palette.darkIndigo
        : props.theme.palette.lightCyan};
    border-radius: 10px;
    border: none;
    margin: 0 2px;
  }
`;

export const StepBar = styled(Box)<{
  passed: boolean;
}>`
  flex: 1;
  height: 2px;
  background: ${(props) =>
    props.passed ? props.theme.palette.darkIndigo : props.theme.palette.cyan};

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
