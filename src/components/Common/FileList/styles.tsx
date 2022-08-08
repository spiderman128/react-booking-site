// Dependencies
import styled from 'styled-components';
import { Box, Stack } from '@mui/material';

import { IconButton } from '../IconButton';
import { Button } from '../Button';

export const FileList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

export const RemoveButton = styled(IconButton)`
  &:hover {
    background-color: ${(props) => props.theme.palette.cyan} !important;
  }
`;

export const SelectFileButton = styled(Button)`
  height: 36px;
`;

export const FileItem = styled(Stack)`
  margin-right: 28px;
  margin-bottom: 16px;
`;
