// Dependencies
import styled from 'styled-components';
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from '@mui/material';

// Export styled components
export const Accordion = styled(MuiAccordion)`
  box-shadow: none !important;
  padding: 10px 8px;
  background-color: ${(props) =>
    props.expanded
      ? props.theme.palette.whiteIndigo
      : 'transparent'} !important;

  &:before {
    display: none;
  }
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  .MuiAccordionSummary-content {
    margin: 0;

    > div {
      display: flex;
      align-items: center;
    }

    .MuiAvatar-root {
      margin-right: 12px;
    }

    .MuiBox-root {
      .MuiTypography-root {
        color: ${(props) => props.theme.palette.text.primary} !important;
      }
    }
  }

  .MuiAccordionSummary-expandIconWrapper {
    color: ${(props) => props.theme.palette.text.primary} !important;
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  margin-top: 8px;
`;

export const Status = styled(Typography)`
  background-color: #b5c7e7;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 4px;
  padding: 0 10px;
`;
