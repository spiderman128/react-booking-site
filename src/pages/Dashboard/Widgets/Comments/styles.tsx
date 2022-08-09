// Dependencies
import { Button } from '@mui/material';
import styled from 'styled-components';

// Export styled components
// @ts-ignore

export const CommentItemWrapper = styled.div`
    .comment-name {
        font-weight: 700;
        color: #1A1D1F;
    }
    .comment-nick-name {
        font-weight: 500;
        color: #9A9FA5;
    }
    .comment-status {
        font-weight: 500;
        color: #9A9FA5;
    }
    .comment-title {
        font-weight: 700;
        color: #1A1D1F;
    }
    .comment-content {
        font-weight: 500;
        color: #1A1D1F;
    }
    .comment-time {
        font-weight: 600;
        font-size: 13px;
        color: #9A9FA5;
    }
    .comment-actions {
        color: #9A9FA5;
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