// Dependencies
import styled from 'styled-components';
import { Box, Typography, Popover as MuiPopover } from '@mui/material';
import { IconButton } from '../../../../components';

// Export styled components
export const MapBoxWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;

  & > div {
    height: 100%;
  }

  .gmnoprint[role='menubar'] {
    display: none;
  }

  .gm-svpc[title='Drag Pegman onto the map to open Street View'] {
    display: none;
  }

  .gm-fullscreen-control {
    display: none;
  }

  .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom {
    .gmnoprint:last-child {
      > div {
        border-radius: 8px !important;

        > div {
          margin: 0 !important;
          width: 40px !important;
        }
      }
    }
  }
`;

export const FilterIconButton = styled(IconButton)`
  &.active {
    background-color: ${(props) => props.theme.palette.darkIndigo};
    svg {
      fill: white;
    }
  }
`;

export const FilterPopover = styled(Box)`
  width: 502px;
  padding: 20px;

  @media only screen and (max-width: 765px) {
    width: auto;
  }
`;

export const Popover = styled(MuiPopover)`
  .MuiPopover-paper {
    margin-top: 4px;
    box-shadow: 0 0 12px rgba(85, 101, 129, 0.1);
  }
`;

export const SelectWrapper = styled(Box)`
  flex: 1;

  .MuiInput-root {
    width: 100%;
  }
`;

export const ClearButton = styled(Typography)`
  cursor: pointer;
`;
