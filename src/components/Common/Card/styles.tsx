// Dependencies
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CardHeader as MuiCardHeader, Card as MuiCard } from '@mui/material';

// Export styled components
export const Card = styled(MuiCard)`
  height: 100%;
  ${(props) => props.theme.breakpoints.down('md')} {
    width: calc(100vw - 36px) !important;
  }
`;

export const CardHeader = styled(MuiCardHeader)<{ headerdivider?: boolean }>`
  && {
    border-bottom-color: ${(props) => props.theme.palette.lightCyan};
    border-bottom-style: solid;
    border-bottom-width: ${(props) => (props.headerdivider ? 1 : 0)}px;

    &.is-searching {
      .MuiCardHeader-action {
        width: 100%;
      }

      .MuiInputBase-root {
        flex: 1;
      }
    }
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 12px !important;

    .MuiInputBase-root {
      height: 36px;
    }

    .MuiCardHeader-title {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

// @ts-ignore
export const CardContent = styled(PerfectScrollbar)<{
  height?: string | number;
  padding?: string | number;
}>`
  margin: ${(props) =>
    props.padding === undefined
      ? '0 20px 20px'
      : typeof props.padding === 'string'
      ? props.padding
      : `${props.padding}px`};
  height: ${(props) =>
    props.height === undefined
      ? '100%'
      : typeof props.height === 'string'
      ? props.height
      : `${props.height}px`};
`;