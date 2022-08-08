// Dependencies
import React, { FC } from 'react';
import { MenuItem, Pagination, SelectChangeEvent, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Select } from '../../Select';
import { Typography } from '../../Typography';

// Interfaces
export interface ITablePaginationProps {
  page?: number;
  totalPage?: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
}

// Default values
const defaultPage = 1;
export const defaultRowsPerPage = 10;
const defaultRowsPerPageOptions = [5, 10, 20];

// Export TablePagination component
export const TablePagination: FC<ITablePaginationProps> = ({
  page = defaultPage,
  totalPage,
  rowsPerPage = defaultRowsPerPage,
  rowsPerPageOptions = defaultRowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
}) => {
  // Get translation from hook
  const { t } = useTranslation();

  // Rows per page change handler
  const handleRowsPerPageChange = (event: SelectChangeEvent<unknown>) => {
    if (onRowsPerPageChange) {
      onRowsPerPageChange(event.target.value as number);
    }
  };

  // Page change handler
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    if (onPageChange) {
      onPageChange(value);
    }
  };

  // Return TablePagination component
  return (
    <Stack
      p={{ xs: '20px 16px', sm: 20 }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack spacing={12} direction="row" alignItems="center">
        <Typography
          variant="body2"
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          {t('table.rows_per_page')}:
        </Typography>
        <Select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          sx={{
            padding: { xs: 8, md: 12 },
            minHeight: 32,
            height: 32,
            ml: { xs: 0, sm: 12 },
          }}
        >
          {rowsPerPageOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Pagination
        shape="rounded"
        page={page}
        count={totalPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
};
