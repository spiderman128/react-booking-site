// Dependencies
import React, { FC, ReactNode, useMemo, useState } from 'react';
import {
  Box,
  Menu,
  MenuItem,
  Table as MuiTable,
  ToggleButton,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

// Components
import { Icon } from '../Icon';
import { Dialog } from '../Dialog';
import { TableHead } from './TableHead';
import { Typography } from '../Typography';
import { defaultRowsPerPage, TablePagination } from './TablePagination';

// Interfaces
import { ISortBy } from '../../../interfaces';
import { ITablePaginationProps } from './TablePagination';

// Colors
import { lightCyan } from '../../../theme/palette';

export interface IColumn {
  field: string;
  label: string;
  visible?: boolean;
  sortable?: boolean;
  render?: (row: any) => ReactNode;
}

interface IRowAction {
  icon: string;
  label: string;
  onClick: (id) => void;
}

export interface ITableProps {
  data: any[];
  columns: IColumn[];
  rowActions?: IRowAction[];
  onSort: (sortBy: ISortBy) => void;
}

export interface IDataTableProps extends ITablePaginationProps {
  sx?: SxProps<Theme>;
  data: any[];
  columns: IColumn[];
  rowActions?: IRowAction[];
  onSort: (sortBy: ISortBy) => void;
  onRowClick?: (id: number) => void;
  paginated?: boolean;
  rowSelectable?: boolean;
  columnEditable?: boolean;
  stickyHeader?: boolean;
  contentSize?: {
    height?: number | string;
    width?: number | string;
  };
}

// Export DataTable component
export const DataTable: FC<IDataTableProps> = ({
  sx,
  data,
  columns,
  rowActions,
  page,
  totalPage,
  rowsPerPage = defaultRowsPerPage,
  rowsPerPageOptions,
  onSort,
  onPageChange,
  onRowsPerPageChange,
  paginated = false,
  rowSelectable = false,
  columnEditable = false,
  stickyHeader = false,
  contentSize,
  onRowClick,
}) => {
  // Get visible columns from props
  const defaultVisibleColumns = useMemo(
    () =>
      columns
        .map((column) => ({
          ...column,
          visible: column.visible === undefined ? true : column.visible,
          sortable: column.sortable === undefined ? true : column.sortable,
        }))
        .filter(({ visible }) => visible) || [],
    [columns]
  );

  // States
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<IColumn[]>(
    defaultVisibleColumns
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeRowId, setActiveRowId] = useState<number>();

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n, index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClickRow = (id: number) => {
    onRowClick && onRowClick(id);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  // Check visible field
  const isVisibleColumn = (key) => {
    const visibleColumn = visibleColumns.find(({ field }) => key === field);
    if (visibleColumn) {
      return visibleColumn.visible;
    } else {
      return false;
    }
  };

  // Visible columns change handler
  const handleChangeVisibleColumns = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVisibleColumns(
      columns
        .map((column) => ({
          ...column,
          visible:
            column.field === event.target.name
              ? event.target.checked
              : isVisibleColumn(column.field),
          sortable: column.sortable === undefined ? true : column.sortable,
        }))
        .filter(({ visible }) => visible)
    );
  };

  // Reset visible columns handler
  const handleResetVisibleColumns = () => {
    setVisibleColumns(defaultVisibleColumns);
  };

  // Row action click handler
  const handleClickRowAction = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    event.stopPropagation();
    setActiveRowId(index);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // Close row action handler
  const handleCloseRowActionMenu = () => {
    setAnchorEl(null);
  };

  // Hide column handler
  const handleHideColumn = (activeColumn: IColumn) => {
    setVisibleColumns(
      visibleColumns.filter((column) => activeColumn.field !== column.field)
    );
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty data.
  const emptyRows = Math.max(0, rowsPerPage - data.length) || 0;

  // Return DataTable component
  return (
    <Box sx={sx}>
      <PerfectScrollbar
        style={{
          maxHeight: contentSize?.height ? contentSize.height : 'auto',
          maxWidth: contentSize?.width ? contentSize.width : 'auto',
          borderBottom: `1px solid ${lightCyan}`,
        }}
      >
        <MuiTable stickyHeader={stickyHeader}>
          <TableHead
            numSelected={selected.length}
            rowCount={data.length}
            columns={columns}
            visibleColumns={visibleColumns}
            onSort={onSort}
            onHideColumn={handleHideColumn}
            onSelectAllClick={handleSelectAllClick}
            onResetVisibleColumns={handleResetVisibleColumns}
            onChangeVisibleColumns={handleChangeVisibleColumns}
            rowSelectable={rowSelectable}
            columnEditable={columnEditable}
          />
          <TableBody>
            {data.map((row, index) => {
              // @ts-ignore
              const isItemSelected = isSelected(index);

              // Return Table component
              return (
                <TableRow
                  hover
                  // @ts-ignore
                  onClick={() => handleClickRow(row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={index}
                  selected={isItemSelected}
                >
                  {rowSelectable && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, index)}
                      />
                    </TableCell>
                  )}
                  {visibleColumns.map(({ field, render }) => (
                    <TableCell key={field}>
                      {render ? render(row) : row[field]}
                    </TableCell>
                  ))}
                  {columnEditable && (
                    <TableCell align="right">
                      <ToggleButton
                        value=""
                        selected={Boolean(anchorEl) && activeRowId === index}
                        onClick={(e) => handleClickRowAction(e, index)}
                      >
                        <Icon name="ellipsis" />
                      </ToggleButton>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={visibleColumns.length + 2} />
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </PerfectScrollbar>
      {rowActions && (
        <Menu
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl) && !isMobile}
          anchorEl={anchorEl}
          onClose={handleCloseRowActionMenu}
        >
          {rowActions.map(({ icon, label, onClick }, index) => (
            <MenuItem key={index} onClick={() => onClick(activeRowId)}>
              <Icon
                name={icon}
                size={18}
                color={
                  icon === 'trash'
                    ? // @ts-ignore
                      theme.palette.red
                    : // @ts-ignore
                      theme.palette.lightIndigo
                }
              />
              <Typography variant="body2" ml={14}>
                {label}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
      {rowActions && (
        <Dialog
          title="Actions"
          open={Boolean(anchorEl) && isMobile}
          onClose={handleCloseRowActionMenu}
        >
          {rowActions.map(({ icon, label, onClick }, index) => (
            <MenuItem key={index} onClick={() => onClick(activeRowId)}>
              <Icon
                name={icon}
                size={20}
                color={
                  icon === 'trash'
                    ? // @ts-ignore
                      theme.palette.red
                    : // @ts-ignore
                      theme.palette.lightIndigo
                }
              />
              <Typography ml={14}>{label}</Typography>
            </MenuItem>
          ))}
        </Dialog>
      )}
      {paginated && (
        <TablePagination
          page={page}
          totalPage={totalPage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </Box>
  );
};
