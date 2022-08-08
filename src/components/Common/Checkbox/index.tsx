// Dependencies
import { FC } from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

// Export Checkbox component
export const Checkbox: FC<CheckboxProps> = (props) => (
  <MuiCheckbox {...props} />
);
