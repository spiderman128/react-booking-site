// Dependencies
import styled from 'styled-components';
import { Box, Drawer } from '@mui/material';
import { IconButton } from '../../Common';

// Export styled component
export const Header = styled.div`
  box-shadow: ${(props) => props.theme.shadows[1]};
  background-color: ${(props) => props.theme.palette.common.white};
  padding: 20px 36px;
  z-index: ${(props) => props.theme.zIndex.appBar};

  @media only screen and (max-width: 991px) {
    padding: 16px;
  }
`;

export const DesktopHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileHeader = styled(Box)`
  z-index: 1201 !important;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  margin-right: auto;
`;

export const Logo = styled.img`
  margin-left: 12px;
  height: 36px;
`;

export const MobileDrawer = styled(Drawer)`
  &.MuiModal-root {
    z-index: 1000;
    top: 68px;
    .MuiBackdrop-root {
      top: 68px;
    }

    > .MuiPaper-root {
      top: 68px;
      border-radius: 0;
      height: calc(100vh - 68px);
      padding: 20px 16px;
    }
  }
`;

export const DarkIconButton = styled(IconButton)`
  background-color: ${(props) => props.theme.palette.darkIndigo} !important;
  color: #fff !important;
`;
