// Dependencies
import { FC } from 'react';
import { Select as MuiSelect, SelectProps } from '@mui/material';

// Export Select component
export const Select: FC<SelectProps> = (props) => <MuiSelect {...props} />;
