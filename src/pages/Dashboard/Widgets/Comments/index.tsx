// Dependencies
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';
import { Divider, Stack } from '@mui/material';
import { ChatOutlined, FavoriteBorderOutlined, Link } from '@mui/icons-material';

// Styles
import * as S from './styles';

// Constants
const data = [
  {
    avatar: 'avatar1.png',
    name: 'Ethel',
    nick_name: '@ethel',
    status: true,
    title: 'Smiles - 3D icons',
    content: 'Great work 😊',
    time: '1h'
  },
  {
    avatar: 'avatar2.png',
    name: 'Jazmyn',
    nick_name: '@jaz.designer',
    status: true,
    title: 'Fleet - Travel shopping',
    content: 'I need react version asap!',
    time: '8h'
  },
  {
    avatar: 'avatar3.png',
    name: 'Ethel',
    nick_name: '@ethel',
    status: true,
    title: 'Smiles - 3D icons',
    content: 'How can I buy only the design?',
    time: '1h'
  },
]

// Export comments widget
export const CommentsWidget: FC = () => {
  const { t } = useTranslation();

  const CommentItem = ({avatar, name, nick_name, status, title, content, time}) => {
    return (
      <S.CommentItemWrapper>
        <div className='d-flex font-size-15'>
          {/* USER AVATAR */}
          <div className='me-3'>
            <img alt={name} src={`/assets/images/dashboard/${avatar}`} width={64} height={64} className='rounded-circle' />
          </div>
          <div className='width-match-parent'>
            
            {/* COMMENT DESCRIPTION */}
            <div className='d-flex'>
              <div className='me-auto'>
                <div><span className='me-2 comment-name'>{name}</span><span className='comment-nick-name'>{nick_name}</span></div>
                <div><span className='me-2 comment-status'>{status? 'On' : 'Off'}</span><span className='comment-title'>{title}</span></div>
                <div className='comment-content mt-2'>{content}</div>
              </div>
              <div className='comment-time'>{time}</div>
            </div>

            {/* ACTION BUTTON LIST */}
            <div className='d-flex justify-content-between mt-3 comment-actions'>
              <ChatOutlined />
              <FavoriteBorderOutlined />
              <Link />
            </div>
          </div>
        </div>
      </S.CommentItemWrapper>
    )
  }

  // Return comments widget
  return (
    <Card
      title={t('dashboard.comments')}
      titleColor='#FFD88D'
    >
      
      <Stack spacing={30} divider={<Divider variant='middle' className='mt-3' />}>
        {data.map((item, index) => (
          <CommentItem {...item} key={index} />
        ))}
      </Stack>
      <S.BlockButton>
        View all
      </S.BlockButton>
    </Card>
  );
};
