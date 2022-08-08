// Dependencies
import React, { FC, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Menu,
  MenuItem,
  Popover,
  Stack,
  Switch,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  ToggleButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

// Component
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { Dialog } from '../../Dialog';
import { Typography } from '../../Typography';

// Interfaces
import { IColumn } from '../index';
import { ISortBy, Order } from '../../../../interfaces';

interface ITableHeadProps {
  numSelected: number;
  rowCount: number;
  rowSelectable: boolean;
  columnEditable: boolean;
  columns: IColumn[];
  visibleColumns: IColumn[];
  onSort: (sortBy: ISortBy) => void;
  onHideColumn: (column: IColumn) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetVisibleColumns: () => void;
  onChangeVisibleColumns: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Export TableHead component
export const TableHead: FC<ITableHeadProps> = ({
  columns,
  visibleColumns,
  numSelected,
  rowSelectable,
  columnEditable,
  rowCount,
  onSort,
  onHideColumn,
  onSelectAllClick,
  onResetVisibleColumns,
  onChangeVisibleColumns,
}) => {
  // Get translations from hook
  const { t } = useTranslation();

  // States
  const [activeColumn, setActiveColumn] = useState<IColumn>();
  const [columnActionAnchorEl, setColumnActionAnchorEl] =
    useState<null | HTMLElement>(null);
  const [visibleColumnAnchorEl, setVisibleColumnAnchorEl] =
    useState<null | HTMLElement>(null);

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Customize columns click handler
  const handleClickCustomizeColumns = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setVisibleColumnAnchorEl(
      visibleColumnAnchorEl ? null : event.currentTarget
    );
  };

  // Close customize columns handler
  const handleCloseCustomizeColumnsMenu = () => {
    setVisibleColumnAnchorEl(null);
  };

  // Column action click handler
  const handleClickColumnAction = (
    event: React.MouseEvent<HTMLElement>,
    activeColumn: IColumn
  ) => {
    setActiveColumn(activeColumn);
    setColumnActionAnchorEl(columnActionAnchorEl ? null : event.currentTarget);
  };

  // Close column action menu handler
  const handleCloseColumnActionMenu = () => {
    setColumnActionAnchorEl(null);
  };

  // Hide column handler
  const handleHideColumn = () => {
    if (activeColumn) {
      onHideColumn(activeColumn);
    }
    handleCloseColumnActionMenu();
  };

  // Sort asc handler
  const handleSortAsc = () => {
    if (activeColumn) {
      onSort({
        field: activeColumn.field,
        order: Order.Asc,
      });
    }
    handleCloseColumnActionMenu();
  };

  // Sort desc handler
  const handleSortDesc = () => {
    if (activeColumn) {
      onSort({
        field: activeColumn.field,
        order: Order.Desc,
      });
    }
    handleCloseColumnActionMenu();
  };

  // Check visible field
  const isVisibleColumn = (key) => {
    const visibleHeadCell = visibleColumns.find(({ field }) => key === field);
    if (visibleHeadCell) {
      return visibleHeadCell.visible;
    } else {
      return false;
    }
  };

  // Return TableHead component
  return (
    <>
      <MuiTableHead>
        <TableRow>
          {rowSelectable && (
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
          )}
          {visibleColumns.map((column) => (
            <TableCell key={column.field} sx={{ whiteSpace: 'noWrap' }}>
              {column.label}
              {column.sortable && (
                <ToggleButton
                  value=""
                  // @ts-ignore
                  sx={(theme) => ({ ml: 10, color: theme.palette.lightIndigo })}
                  selected={
                    column === activeColumn && Boolean(columnActionAnchorEl)
                  }
                  onClick={(e) => handleClickColumnAction(e, column)}
                >
                  <Icon name="arrow-down" />
                </ToggleButton>
              )}
            </TableCell>
          ))}
          {columnEditable && (
            <TableCell align="right">
              <ToggleButton
                value=""
                selected={Boolean(visibleColumnAnchorEl)}
                onClick={handleClickCustomizeColumns}
              >
                <Icon name="toggle" />
              </ToggleButton>
            </TableCell>
          )}
        </TableRow>
      </MuiTableHead>
      <Menu
        anchorEl={columnActionAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(columnActionAnchorEl) && !isMobile}
        onClose={handleCloseColumnActionMenu}
      >
        <MenuItem onClick={handleSortDesc}>
          <Icon name="" />
          <Typography ml={14} variant="body2">
            {activeColumn?.label}
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleSortAsc}>
          <Icon name="" />
          <Typography ml={14} variant="body2">
            {activeColumn?.label}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon name="" />
          <Typography ml={14} variant="body2">
            Reset Sort
          </Typography>
        </MenuItem>
        {columnEditable && (
          <MenuItem
            // @ts-ignore
            sx={(theme) => ({ borderTop: `1px solid ${theme.palette.cyan}` })}
          >
            <Icon name="eye-close" />
            <Typography ml={14} variant="body2" onClick={handleHideColumn}>
              Hide Column
            </Typography>
          </MenuItem>
        )}
      </Menu>
      <Popover
        anchorEl={visibleColumnAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(visibleColumnAnchorEl) && !isMobile}
        onClose={handleCloseCustomizeColumnsMenu}
      >
        <Card sx={{ minWidth: 377 }}>
          <CardHeader
            sx={(theme) => ({
              pb: 19,
              // @ts-ignore
              borderBottom: `1px solid ${theme.palette.lightCyan}`,
            })}
            title="Customize Columns"
            action={<Button onClick={onResetVisibleColumns}>{t('table.reset')}</Button>}
          />
          <CardContent>
            <PerfectScrollbar style={{ height: 267, paddingRight: 14 }}>
              <Stack spacing={24}>
                {columns.map(({ label, field }) => (
                  <FormControlLabel
                    key={field}
                    label={label}
                    labelPlacement="start"
                    control={
                      <Switch
                        name={field}
                        checked={isVisibleColumn(field)}
                        onChange={onChangeVisibleColumns}
                      />
                    }
                    sx={{
                      mx: 0,
                      justifyContent: 'space-between',
                    }}
                  />
                ))}
              </Stack>
            </PerfectScrollbar>
          </CardContent>
        </Card>
      </Popover>
      <Dialog
        title={t('talbe.customize_columns')}
        open={Boolean(visibleColumnAnchorEl) && isMobile}
        onClose={handleCloseCustomizeColumnsMenu}
        actions={
          <Button size="large" fullWidth>
            Reset
          </Button>
        }
      >
        <PerfectScrollbar style={{ height: 267 }}>
          <Stack spacing={24}>
            {columns.map(({ label, field }) => (
              <FormControlLabel
                key={field}
                label={label}
                labelPlacement="start"
                control={
                  <Switch
                    name={field}
                    checked={isVisibleColumn(field)}
                    onChange={onChangeVisibleColumns}
                  />
                }
                sx={{
                  mx: 0,
                  justifyContent: 'space-between',
                }}
              />
            ))}
          </Stack>
        </PerfectScrollbar>
      </Dialog>
    </>
  );
};
