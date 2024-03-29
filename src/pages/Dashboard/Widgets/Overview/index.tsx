// Dependencies
import React, { FC, useState } from 'react';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
  Chip,
  Button,
} from '@mui/material';
import { Info, ArrowDownward, ArrowUpward, ArrowForward } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';

// Styles
import * as S from './styles';

// Constants
import { CARD_LAYOUT_SPACING } from '../../../../constants';
const data = [
  {
    avatar: 'avatar1.png',
    name: 'Gladyce',
  },
  {
    avatar: 'avatar2.png',
    name: 'Elbert',
  },
  {
    avatar: 'avatar3.png',
    name: 'Joyce',
  },
];

// Export overview widget
export const OverviewWidget: FC = () => {
  const { t } = useTranslation();

  // States
  const [date, setDate] = useState('all time');
  const [option, setOption] = useState('customers');

  // Date change handler
  const handleChangeDate = (e: SelectChangeEvent) => {
    setDate(e.target.value);
  };

  const handleOptionChange = (value) => () => {
    setOption(value);
  };

  const CardSwitchOption = ({
    value,
    iconName,
    title,
    number,
    isIncreased,
    changePercent,
  }) => {
    return (
      <S.SwitchItemWrapper isActive={value === option} onClick={handleOptionChange(value)}>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-start p-3 pb-1'>
            <S.OverviewIcon
              src={`/assets/images/dashboard/${iconName}.svg`}
              alt={iconName}
            />
            <div className='ms-4'>
              <div className='text-secondary'>
                {title} <Info />
              </div>
              <h2 className='switch-value'>{number}</h2>
            </div>
          </div>
          <Chip
            icon={isIncreased ? <ArrowUpward /> : <ArrowDownward />}
            label={changePercent + '%'}
            color={isIncreased ? 'success' : 'error'}
          />
        </div>
      </S.SwitchItemWrapper>
    );
  };

  // Return overview widget
  return (
    <Card
      title={t('dashboard.overview')}
      titleColor='#FFBC99'
      action={
        <Select value={date} onChange={handleChangeDate}>
          <MenuItem value='all time'>{t('dashboard.all_time')}</MenuItem>
        </Select>
      }
    >
      {/* CARD SWITCH SELECTOR */}
      <S.CardSwitchSelector className='mb-5'>
        <Grid container spacing={CARD_LAYOUT_SPACING.row}>
          <Grid item xs={6}>
            <CardSwitchOption
              value='customers'
              iconName='overview-icon1'
              title={t('dashboard.customers')}
              number='1024'
              isIncreased={true}
              changePercent={37.8}
            />
          </Grid>
          <Grid item xs={6}>
            <CardSwitchOption
              value='income'
              iconName='overview-icon2'
              title={t('dashboard.income')}
              number='256k'
              isIncreased={false}
              changePercent={37.8}
            />
          </Grid>
        </Grid>
      </S.CardSwitchSelector>

      {/* SEND MESSAGE BUTTON */}
      <div className='d-flex mb-5 px-1'>
        <div className='me-auto ms-2'>
          Welcome <strong>857 customers</strong> with a <br/> personal message 😎
        </div>
        <Button className='fw-bold'>{t('dashboard.send_message')}</Button>
      </div>
      
      {/* AVATAR LIST */}
      <Grid container columns={{ xs: 9, sm: 9, md: 12 }}>
        {data.map((item, index) => (
          <Grid item xs={3} key={index}>
            <S.OverviewAvatar
              alt={item.name}
              src={`/assets/images/dashboard/${item.avatar}`}
            />
            <p className='mt-2 text-center'>{item.name}</p>
          </Grid>
        ))}
        <Grid item xs={3}>
          <S.OverviewAvatar>
            <ArrowForward />
          </S.OverviewAvatar>
          <p className='mt-2 text-center'>{t('dashboard.view_all')}</p>
        </Grid>
      </Grid>

    </Card>
  );
};
