// Dependencies
import { FC } from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';

// Interfaces
export interface ITypographyProps extends TypographyProps {}

// Export Typography component
export const Typography: FC<ITypographyProps> = (props) => (
  <MuiTypography {...props} />
);
