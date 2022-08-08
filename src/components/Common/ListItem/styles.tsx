// Dependencies
import styled from 'styled-components';
import { Box, Typography, ListItem as MuiListItem } from '@mui/material';

// Export styled components
export const ListItem = styled(MuiListItem)`
  padding: 12px !important;
  border-radius: 10px !important;

  &:hover {
    background-color: ${(props) => props.theme.palette.whiteIndigo};
    cursor: pointer;
  }
  &:not(:last-of-type) {
    margin-bottom: 8px !important;
  }

  .MuiIconButton-root {
    width: 36px;
    height: 36px;
    display: flex;
  }

  .MuiIconButton-root {
    display: none;
  }

  .MuiListItemText-secondary {
    margin-top: 0 !important;
  }

  @media only screen and (max-width: 765px) {
    padding: 10px 20px !important;
    .MuiListItemText-secondary {
      margin-top: 0 !important;
      white-space: nowrap;
      width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .MuiIconButton-root {
      display: flex;
    }
  }
`;

export const SecondaryListItemText = styled(Typography)`
  margin-top: 7px;
  margin-right: 10px;
  margin-bottom: auto;
`;

export const SecondarySubTitle = styled(Typography)`
  min-width: 191.5px;
`;

export const Status = styled(Typography)`
  && {
    position: absolute;
    background-color: #b5c7e7;
    font-size: 12px;
    right: 12px;
    top: 12px;
    border-radius: 3px;
    padding: 3px 10px;
    height: 24px;
    display: flex;
    align-items: center;
  }
`;

export const Notification = styled(Typography)`
  margin-left: 8px !important;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.palette.error.main};
  color: white;
  font-size: 12px !important;
  border-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Box)`
  margin-left: 8px;
`;
