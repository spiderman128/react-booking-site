// Dependencies
import styled, { css } from 'styled-components';
import { MenuItem, MenuItemAvatar } from '../DrawerContent/styles';

// Export styled components
export const Sidebar = styled.div<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? 88 : 256)}px;
  padding: 24px 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: ${(props) => props.theme.shadows[1]};
  background-color: ${(props) => props.theme.palette.common.white};
  z-index: ${(props) => props.theme.zIndex.drawer};
  transition: width 0.2s ease-in;

  ${(props) =>
    props.isCollapsed &&
    css`
      ${MenuItem} {
        padding: 0 !important;
        justify-content: center !important;
      }

      ${MenuItemAvatar} {
        margin-left: 0 !important;
      }
    `};

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 68px;
  min-height: 44px;
  padding-right: 5px;
  padding-left: 8px;
`;

export const Logo = styled.img``;
