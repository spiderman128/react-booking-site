// Dependencies
import React, { FC, ReactNode } from 'react';
import { DialogProps, Typography } from '@mui/material';

// Components
import { Icon } from '../Icon';

// Styles
import * as S from './styles';

// Interfaces
export interface IDialogProps extends Omit<DialogProps, 'title'> {
  title: ReactNode;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  headerChild?: ReactNode;
  actions?: ReactNode;
}

// Export Dialog component
export const Dialog: FC<IDialogProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  headerChild,
  ...rest
}) => (
  <S.Dialog onClose={onClose} open={open} fullWidth scroll="body" {...rest}>
    <S.DialogTitle>
      {typeof title === 'string' ? (
        <Typography variant="h2">{title}</Typography>
      ) : (
        title
      )}
      {onClose ? (
        <S.CloseIconButton onClick={onClose} color="default">
          <Icon name="x-lg" />
        </S.CloseIconButton>
      ) : null}
      {headerChild && headerChild}
    </S.DialogTitle>
    <S.DialogContent>{children}</S.DialogContent>
    {actions && <S.DialogActions>{actions}</S.DialogActions>}
  </S.Dialog>
);
