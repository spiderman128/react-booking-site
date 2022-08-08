// Dependencies
import { FC } from 'react';
import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { Icon } from '../Icon';

// Styles
import * as S from './styles';
import { darkIndigo } from '../../../theme/palette';

interface IDatePickerProps {
  label?: string;
  format?: string;
  onChange: (date: string | Date | null) => void;
  value: string;
}

const CalendarIcon = () => <Icon name="calendar" color={darkIndigo} />

// Export datepicker
export const DatePicker: FC<IDatePickerProps> = ({
  label,
  format = 'MM/dd/yyyy',
  onChange,
  value,
}) => {

  const handleChange = (newValue: Date | null) => {
    onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label && label}
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <S.FormInput {...params} />}
        components={{
          OpenPickerIcon: CalendarIcon
        }}
      />
    </LocalizationProvider>
  );
};
