// Dependencies
import { FC } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsSizeOverrides } from '@mui/material/Button/Button';

// Interfaces
export interface IButtonProps extends ButtonProps {
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'small'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >;
}

// Export Button component
export const Button: FC<IButtonProps> = (props) => <MuiButton {...props} />;
