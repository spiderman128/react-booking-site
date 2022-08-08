// Dependencies
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import {
  Button,
  DataTable,
  Icon,
  IconButton,
  Input,
  Typography,
} from '../../components';

import * as S from './styles';
import { darkIndigo, white } from '../../theme/palette';

// Data
const leads = [
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Kerstin Fischer',
    livedIn: 'Apartment',
    createdAt: '12.06.2022',
  },
  {
    name: 'Courtney Henry',
    livedIn: 'Apartment',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'Apartment',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Kerstin Fischer',
    livedIn: 'Apartment',
    createdAt: '12.06.2022',
  },
  {
    name: 'Courtney Henry',
    livedIn: 'Apartment',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'Apartment',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
  {
    name: 'Andreas Haas',
    livedIn: 'House',
    createdAt: '12.06.2022',
  },
];

const personalInformation = [
  {
    field: 'Gender',
    value: 'Male',
  },
  {
    field: 'Year of Birth',
    value: '1960',
  },
  {
    field: 'Postcode',
    value: '83520',
  },
  {
    field: 'Phone',
    value: '030-901820',
  },
  {
    field: 'Payout',
    value: 'One-time Payment',
  },
  {
    field: 'Partner',
    value: 'Yes',
  },
];

const partnerInformation = [
  {
    field: 'Gender',
    value: 'Female',
  },
  {
    field: 'Year of Birth',
    value: '1950',
  },
];

const statusMenus = [
  { value: 'assumed', label: 'Assumed' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'notPickedUp', label: 'Not Picked Up' },
  { value: 'willStillDecide', label: 'Will Still Decide' },
  { value: 'willGetBackToUs', label: 'Will get back To Us' },
];

const columns = [
  {
    field: 'name',
    numeric: false,
    label: 'Name',
    render: (row) => (
      <>
        <Typography variant="body2" fontWeight={500}>
          {row.name}
        </Typography>
        <Typography variant="body2" fontWeight={500} sx={{ fontWeight: '400' }}>
          {row.livedIn}
        </Typography>
      </>
    ),
  },
  {
    field: 'createdAt',
    numeric: false,
    label: 'Date',
  },
];

// Export LeadsDetail page
export const LeadsDetailPage: FC = () => {
  // Get t from hook
  const { t } = useTranslation();

  // Get navigate from hook
  const navigate = useNavigate();

  const [statusMenuAnchor, setStatusMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const [status, setStatus] = useState('assumed');

  // Check platform
  const isDesktop = useMediaQuery('(min-width: 1300px)');
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenStatusMenu = (event: React.MouseEvent<HTMLElement>) => {
    setStatusMenuAnchor(event.currentTarget);
  };
  const handleCloseStatusMenu = () => {
    setStatusMenuAnchor(null);
  };

  // Go back handler
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSelectStatus = (value) => {
    setStatusMenuAnchor(null);
    setStatus(value);
  };

  // Return LeadsDetail page
  return isDesktop ? (
    <Grid container columns={3} spacing={20}>
      <Grid item xs={1}>
        <Card>
          <CardHeader
            sx={(theme) => ({
              pt: 25,
              pb: 22,
              // @ts-ignore
              borderBottom: `1px solid ${theme.palette.lightCyan}`,
            })}
            title={
              <Stack direction="row" spacing={8}>
                <IconButton onClick={handleGoBack}>
                  <Icon name="arrow-back" />
                </IconButton>
                <Input
                  fullWidth
                  startAdornment={<Icon name="search" />}
                  placeholder={t('leads_detail')}
                />
                <IconButton>
                  <Icon name="funnel-fill" />
                </IconButton>
              </Stack>
            }
          />
          <CardContent sx={{ pt: 0 }}>
            <DataTable
              stickyHeader
              data={leads}
              columns={columns}
              onSort={() => {}}
              contentSize={{
                height: 'calc(100vh - 272px)',
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardHeader
            title={
              <S.DetailCardHeaderTitle>
                <Typography variant="h3" mr={20}>
                  Andreas Haas
                </Typography>
                <S.StatusMenuButton color="info" onClick={handleOpenStatusMenu}>
                  {statusMenus.find((menu) => menu.value === status)?.label}
                  <Icon name="arrow-down" size={12} />
                </S.StatusMenuButton>
                <S.StatusMenu
                  anchorEl={statusMenuAnchor}
                  open={!!statusMenuAnchor}
                  onClose={handleCloseStatusMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  {statusMenus.map((item, index) => (
                    <MenuItem
                      key={index}
                      className={item.value === status ? 'active' : ''}
                      sx={{
                        background:
                          item.value === status ? darkIndigo : 'transparent',
                        color: item.value === status ? white : darkIndigo,
                      }}
                      onClick={() => handleSelectStatus(item.value)}
                    >
                      {item.label}
                      {item.value === status && (
                        <Icon name="tick" size={16} color="default" />
                      )}
                    </MenuItem>
                  ))}
                </S.StatusMenu>
              </S.DetailCardHeaderTitle>
            }
            action={
              <Stack direction="row" spacing={8}>
                <Button>{t('leads_detail.create_customer')}</Button>
                <Button>{t('leads_detail.assign_broker')}</Button>
                <IconButton>
                  <Icon name="trash" />
                </IconButton>
              </Stack>
            }
            subheader={
              <Typography mt={8} variant="body2">
                {t('leads_detail.creation_date')}: 12.06.2022
              </Typography>
            }
          />
          <CardContent sx={{ p: 20 }}>
            <S.Scrollbar>
              <FormControl>
                <FormLabel>{t('leads_detail.comment')}</FormLabel>
                <Input
                  size="medium"
                  multiline
                  minRows={5}
                  placeholder={t('leads_detail.comment_placeholder')}
                />
              </FormControl>
              <Typography mt={40} mb={12} variant="h3">
                {t('leads_detail.personal_information')}
              </Typography>
              <Table>
                <TableBody>
                  {personalInformation.map(({ field, value }, index) => (
                    <TableRow key={index}>
                      <TableCell>{field}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography mt={40} mb={12} variant="h3">
                {t('leads_detail.partners_personal_information')}
              </Typography>
              <Table>
                <TableBody>
                  {partnerInformation.map(({ field, value }, index) => (
                    <TableRow key={index}>
                      <TableCell>{field}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </S.Scrollbar>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <Card>
      <CardHeader
        sx={{ px: 16, pt: 18, pb: 4 }}
        title={
          <IconButton onClick={handleGoBack}>
            <Icon name="arrow-back" />
          </IconButton>
        }
        action={
          <Stack direction="row" spacing={10}>
            <IconButton>
              <Icon name="ellipsis" />
            </IconButton>
            <IconButton>
              <Icon name="trash" />
            </IconButton>
          </Stack>
        }
      />
      <CardContent>
        <S.DetailCardHeaderTitle>
          <Typography variant="h3" mr={20}>
            Andreas Haas
          </Typography>
          <S.StatusMenuButton color="info" onClick={handleOpenStatusMenu}>
            {statusMenus.find((menu) => menu.value === status)?.label}
            <Icon name="arrow-down" size={12} />
          </S.StatusMenuButton>
          <S.StatusMenu
            anchorEl={statusMenuAnchor}
            open={!!statusMenuAnchor}
            onClose={handleCloseStatusMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {statusMenus.map((item, index) => (
              <MenuItem
                key={index}
                className={item.value === status ? 'active' : ''}
                sx={{
                  background:
                    item.value === status ? darkIndigo : 'transparent',
                  color: item.value === status ? white : darkIndigo,
                }}
                onClick={() => handleSelectStatus(item.value)}
              >
                {item.label}
                {item.value === status && (
                  <Icon name="tick" size={16} color="default" />
                )}
              </MenuItem>
            ))}
          </S.StatusMenu>
        </S.DetailCardHeaderTitle>
        <Typography mt={8} mb={28} variant="body2">
          Creation Date: 12.06.2022
        </Typography>
        <S.Scrollbar>
          <FormControl required>
            <FormLabel>Comment</FormLabel>
            <Input
              size="medium"
              multiline
              minRows={5}
              placeholder="Please, write here your comment"
            />
          </FormControl>
          <Typography mt={28} mb={12} variant="h3">
            Personal Information
          </Typography>
          <Table>
            <TableBody>
              {personalInformation.map(({ field, value }, index) => (
                <TableRow key={index}>
                  <TableCell>{field}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography mt={40} mb={12} variant="h3">
            Partner's Personal Information
          </Typography>
          <Table>
            <TableBody>
              {partnerInformation.map(({ field, value }, index) => (
                <TableRow key={index}>
                  <TableCell>{field}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </S.Scrollbar>
      </CardContent>
    </Card>
  );
};
