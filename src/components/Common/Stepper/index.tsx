// Dependencies
import React, { FC } from 'react';
import { Box } from '@mui/material';

import { Typography } from '../Typography';
import * as S from './styles';

interface IStepperProps {
  step: number;
  onChangeStep: (step: number) => void;
  length: number;
}

// Export Stepper component
export const Stepper: FC<IStepperProps> = ({ step, onChangeStep, length }) => {
  return (
    <Box display="flex" alignItems="center" padding="24px 0 0">
      {new Array(length).fill('').map((_, index: number) => (
        <React.Fragment key={index}>
          <S.StepItem
            passed={index < step}
            active={index === step}
            onClick={() => onChangeStep(index)}
          >
            <Typography
              sx={{ display: { xs: 'none', sm: 'block' } }}
              variant="h3"
            >
              {index + 1}
            </Typography>
          </S.StepItem>
          {index < length - 1 && <S.StepBar passed={index < step} />}
        </React.Fragment>
      ))}
    </Box>
  );
};
