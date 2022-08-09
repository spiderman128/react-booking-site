// Dependencies
import { Button } from '@mui/material';
import styled from 'styled-components';

// Export styled components
// @ts-ignore

export const ProductItemWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 15px;

    .product-status.active {
        color: #83BF6E;
        background-color: #EAFAE5;
    }

    .product-status.deactive {
        color: #FF6A55;
        background-color: #FFE7E4;
    }
`;

export const BlockButton = styled(Button)`
  width: 100%;
  background-color: transparent!important;
  border: 2px solid #EFEFEF!important;
  border-radius: 12px!important;
  color: #1A1D1F!important;
  font-weight: 700!important;
  font-size: 15px!important;
  margin-top: 25px!important;
  padding: 10px 0px!important;
`;