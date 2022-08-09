// Dependencies
import React, { FC } from 'react';
import {
  Grid,
  Chip,
  Avatar,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Styles
import * as S from './styles';
import { Card } from '../../../../components';

// Constants
const data = [
  {
    icon: 'tips1.svg',
    title: 'Early access',
    tag: 'New',
    tagColor: '#CABDFF',
    avatar: 'avatar1.png',
    time: '3 mins read'
  },
  {
    icon: 'tips2.svg',
    title: 'Asset use guidelines',
    tag: 'Small Label',
    tagColor: '#B5E4CA',
    avatar: 'avatar2.png',
    time: 'Time'
  },
  {
    icon: 'tips3.svg',
    title: 'Exclusive downloads',
    avatar: 'avatar3.png',
    time: '2 mins read'
  },
  {
    icon: 'tips4.svg',
    title: 'Behind the scenes',
    tag: 'Hot',
    tagColor: '#FFBC99',
    avatar: 'avatar1.png',
    time: '3 mins read'
  },
  {
    icon: 'tips5.svg',
    title: 'Asset use guidelines',
    tag: 'Popular',
    tagColor: '#B5E4CA',
    avatar: 'avatar2.png',
    time: 'Time'
  },
  {
    icon: 'tips6.svg',
    title: 'Life & work updates',
    avatar: 'avatar3.png',
    time: '3 mins read'
  },
];

// Export protips widget
export const ProtipsWidget: FC = () => {
  const { t } = useTranslation();

  // Return protips widget
  return (
    <Card
      title={t('dashboard.protips')}
      titleColor='#B5E4CA'
    >
      <p className='pt-1 pb-3'>{t('dashboard.need_idea')}</p>
      <Grid container rowSpacing={30} className='mb-1'>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>

            {/* PROTIPS ITEM */}
            <S.ProtipsItem className='d-flex align-items-center'>

              {/* PROTIPS ICON */}
              <div className='protips-icon'>
                <img
                  alt={item.title}
                  src={`/assets/images/dashboard/${item.icon}`}
                />
              </div>

              {/* PROTIPS DESCRIPTION */}
              <div className='protips-description'>
                <div className='protips-title mb-2'>{item.title}</div>
                <div>
                  {item.tag
                    ? <span className='badge text-dark me-2' style={{backgroundColor: item.tagColor}}>{item.tag}</span> 
                    : null}
                    <Chip
                      avatar={<Avatar alt='protips-user' className='rounded-5' src={`/assets/images/dashboard/${item.avatar}`} />}
                      label={<span className='text-dark'>{item.time}</span>}
                      variant='outlined'
                    />
                </div>
              </div>

            </S.ProtipsItem>
            
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
