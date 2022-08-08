import * as React from 'react';
import Typography from '@mui/material/Typography';

import * as S from './styles';
import { FC } from 'react';
import { Icon } from '../Icon';
import { Avatar, Box, Stack } from '@mui/material';

interface IAccordionProps {
  avatar: string;
  expanded: boolean;
  title: string;
  subTitle: string;
  secondarySubTitle: string;
  status: string;
  notify: string;
  comment: string;
  onChange: (event: React.SyntheticEvent, newExpanded: boolean) => void;
}

export const Accordion: FC<IAccordionProps> = ({
  avatar,
  expanded,
  title,
  subTitle,
  secondarySubTitle,
  status,
  notify,
  comment,
  onChange,
}) => {
  return (
    <S.Accordion
      disableGutters
      elevation={0}
      square
      expanded={expanded}
      onChange={onChange}
    >
      <S.AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        expandIcon={<Icon name="arrow-down" color="primary" />}
      >
        <Stack direction="row">
          <Avatar src={avatar} />
          <Box>
            <Typography variant="h3">{title}</Typography>
            <S.Status>{status}</S.Status>
          </Box>
        </Stack>
      </S.AccordionSummary>
      <S.AccordionDetails>
        <Typography variant="body2">{subTitle}</Typography>
        <Typography variant="body2">{secondarySubTitle}</Typography>
        <Typography variant="body2">{comment}</Typography>
      </S.AccordionDetails>
    </S.Accordion>
  );
};
