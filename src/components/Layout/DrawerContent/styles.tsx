// Dependencies
import styled from 'styled-components';
import { Avatar, ButtonBase, Switch, Typography } from '@mui/material';

export const Menu = styled.div``;

export const MenuItem = styled(ButtonBase)<{ actived?: boolean }>`
  && {
    width: 100%;
    min-height: 48px;
    border-radius: 12px;
    padding: 12px 20px;
    justify-content: flex-start;

    & + & {
      margin-top: 12px;
    }

    &.active {
      color: ${(props) => props.theme.palette.common.white};
      background-color: ${(props) => props.theme.palette.darkIndigo};
    }
  }
`;

export const MenuItemIcon = styled.div`
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.palette.lightIndigo};

    ${MenuItem}.active & {
      color: ${(props) => props.theme.palette.common.white};
    }
  }
`;

export const MenuItemText = styled(Typography)`
  && {
    margin-left: 16px;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const MenuItemAvatar = styled(Avatar)`
  && {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-left: -10px;
  }
`;

export const BottomMenu = styled.div`
  margin-top: auto;
`;