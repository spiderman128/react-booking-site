// Dependencies
import { FC } from 'react';
import { InputBase, InputBaseProps } from '@mui/material';

// Interfaces
export interface IInputProps extends InputBaseProps {}

// Export Input component
export const Input: FC<IInputProps> = (props) => <InputBase {...props} />;
