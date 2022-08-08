// Dependencies
import styled from 'styled-components';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
} from '@mui/material';
import { IconButton } from '../IconButton';

// Export styled components
export const Dialog = styled(MuiDialog)`
  &.MuiModal-root {
    padding: 0;

    .MuiDialog-container {
      > .MuiPaper-root {
        ${(props) => props.theme.breakpoints.down('sm')} {
          margin: 44px 0 0;
          width: 100%;
          vertical-align: bottom;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }

    .MuiDialog-paper {
      max-width: 728px;
    }

    .MuiDialogContent-root {
      padding: 8px;
    }

    .MuiDialogActions-root {
      padding: 8px;
    }
  }
`;

export const DialogTitle = styled(MuiDialogTitle)`
  && {
    margin: 0;
    padding: 20px !important;
    border-bottom: 1px solid ${(props) => props.theme.palette.cyan};

    .MuiTypography-h2 {
      ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 20px;
      }
    }
  }
`;

export const CloseIconButton = styled(IconButton)`
  position: absolute !important;
  right: 20px;
  top: 20px;
  color: ${(props) => props.theme.palette.text.primary};

  ${(props) => props.theme.breakpoints.down('sm')} {
    right: 16px;
    top: 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const DialogContent = styled(MuiDialogContent)`
  padding: 20px !important;
`;

export const DialogActions = styled(MuiDialogActions)`
  padding: 0 20px 20px 20px !important;
`;
