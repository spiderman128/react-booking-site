// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';
import { IconButton } from '../IconButton';
import { Button } from '../Button';

export const ImageList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageItem = styled(Box)`
  position: relative;
  width: 180px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 12px;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    width: calc(50% - 12px);
    height: 108px;
  }
`;

export const RemoveButton = styled(IconButton)`
  position: absolute !important;
  bottom: 8px;
  right: 8px;

  &:hover {
    background-color: ${(props) => props.theme.palette.cyan} !important;
  }
`;

export const AddImageButton = styled(Button)`
  margin-right: 12px;
  margin-bottom: 12px !important;
  height: 120px;
  width: 180px;
  border: 1px solid ${(props) => props.theme.palette.cyan} !important;

  @media only screen and (max-width: 600px) {
    width: calc(50% - 12px);
    height: 108px;
  }
`;
