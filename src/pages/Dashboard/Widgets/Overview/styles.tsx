// Dependencies
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Avatar, Box, Typography } from '@mui/material';

// Export styled components
// @ts-ignore

export const TextContent = styled(Box)`
  position: relative;
  margin-bottom: 12px;

  @media only screen and (max-width: 765px) {
    margin-bottom: 6px;
  }
`;

export const SeeMoreButton = styled(Typography)`
  position: absolute;
  right: 0;
  bottom: 0;
  padding-left: 8px;
  cursor: pointer;
  font-weight: 500 !important;
  background: #fff;
`;

export const CardSwitchSelector = styled(Box)`
  background-color: ${(props) => props.theme.palette.lightCyan};
  padding: 8px;
  border-radius: 20px;
`;

export const SwitchItemWrapper = styled(Box)<{ isActive?: boolean }>`
  background-color: ${(props) => 
    props.isActive
    ? props.theme.palette.common.white
    : props.theme.palette.lightCyan
  };
  box-shadow:  ${(props) => 
    props.isActive
    ? '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)'
    : 'none'
  };
  padding: 8px;
  border-radius: 12px;
  cursor:pointer;

  .switch-value {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const OverviewIcon = styled.img`
  width: 40px;
  height: auto;
  margin-bottom: 16px;
`;

export const OverviewAvatar = styled(Avatar)`
  width: 56px!important;
  height: 56px!important;
  margin: auto!important;
  border-radius: 50%!important;
`;