// Dependencies
import styled, { css } from 'styled-components';
import { Box, Card } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Export styled components
export const DraggableCard = styled(Card)<{ isDragging: boolean }>`
  position: relative;
  ${(props) =>
    !props.isDragging &&
      css`
        ${EmptyCardContent} {
          display: none;
        }
      `
  };
  background: ${(props) => props.isDragging ? props.theme.palette.cyan : props.theme.palette.white} !important;
  border: ${(props) => props.isDragging ? `2px dashed ${props.theme.palette.lightIndigo}` : '2px solid white'};
`;

export const EmptyCardContent = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  background: ${(props) => props.theme.palette.cyan} !important;
  height: 100%;
  width: 100%;
`;

export const PanelColumnContent = styled(PerfectScrollbar)`
  max-height: calc(100vh - 356px);
  
  &.ps--active-y {
    padding-right: 12px;
  }
`;