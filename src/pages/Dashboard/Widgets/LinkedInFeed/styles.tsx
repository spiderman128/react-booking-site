// Dependencies
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Typography } from '@mui/material';

// Export styled components
// @ts-ignore
export const FeedItemWrapper = styled(PerfectScrollbar)`
  padding: 16px;

  .MuiListItem-root {
    margin-bottom: 12px;
    padding: 0;

    @media only screen and (max-width: 765px) {
      margin-bottom: 6px;
    }
  }
`;

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

export const FeedImage = styled(Box)`
  margin-bottom: 12px;
  display: flex;
  height: 200px;

  @media only screen and (max-width: 992px) {
    height: 145px;
    margin-bottom: 6px;
  }

  @media only screen and (max-width: 600px) {
    height: 66px;
    margin-bottom: 6px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NoImageContent = styled(Box)`
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.lightCyan};
  display: flex;
  justify-content: center;

  .MuiTypography-root {
    display: flex;
    align-items: center;
  }
`;

export const FeedInfo = styled(Box)`
  margin-right: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: 14px;
  cursor: pointer;

  svg {
    margin-right: 4px;
  }
`;
