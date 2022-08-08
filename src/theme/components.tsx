// Dependencies
import React from 'react';
import { Components, darken } from '@mui/material';

// Components
import { Icon } from '../components';

// Palette
import {
  cyan,
  darkCyan,
  darkIndigo,
  lightCyan,
  lightIndigo,
  white,
  whiteIndigo,
} from './palette';

// Shadows
import shadows from './shadows';
import breakpoints from './breakpoints';

// Override interface
declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

// Override components
const components: Components = {
  MuiFormControl: {
    defaultProps: {
      fullWidth: true,
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        lineHeight: '24px',
        marginBottom: 4,
        color: darkIndigo,
      },
    },
  },
  MuiInputBase: {
    defaultProps: {
      size: 'small',
    },
    variants: [
      {
        props: { size: 'large' },
        style: {
          minHeight: 52,
          paddingLeft: '20px !important',
          borderRadius: '12px !important',
          '.MuiInputBase-inputAdornedStart': {
            paddingLeft: 8,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        minHeight: 44,
        backgroundColor: lightCyan,
        borderRadius: 8,
        fontSize: 16,
        lineHeight: '24px',
        padding: '10px 12px',
        '.MuiInputBase-inputAdornedStart': {
          paddingLeft: 8,
        },
        '.MuiInputBase-inputAdornedEnd': {
          paddingRight: 8,
        },
        'label + &': {
          marginTop: '0 !important',
        },
      },
      multiline: {
        height: 'initial',
      },
      input: {
        padding: 0,
      },
      sizeSmall: {
        minHeight: 36,
        height: 36,
        padding: '6px 20px',
        fontSize: 14,
        lineHeight: '24px',
        borderRadius: 8,
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: white,
            '& + .MuiSwitch-track': {
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {},
          '&.Mui-disabled + .MuiSwitch-track': {},
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
        },
        '& .MuiSwitch-track': {
          backgroundColor: cyan,
        },
      },
      sizeSmall: {
        width: 32,
        height: 20,
        '& .MuiSwitch-switchBase': {
          '&.Mui-checked': {
            transform: 'translateX(12px)',
          },
        },
        '& .MuiSwitch-thumb': {
          width: 16,
          height: 16,
        },
        '& .MuiSwitch-track': {
          borderRadius: 20 / 2,
        },
      },
      sizeMedium: {
        width: 40,
        height: 24,
        '& .MuiSwitch-switchBase': {
          '&.Mui-checked': {
            transform: 'translateX(16px)',
          },
        },
        '& .MuiSwitch-thumb': {
          width: 20,
          height: 20,
        },
        '& .MuiSwitch-track': {
          borderRadius: 24 / 2,
        },
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      color: 'primary',
    },
  },
  MuiSelect: {
    defaultProps: {
      disableUnderline: true,
      size: 'small',
      variant: 'standard',
      IconComponent: () => <Icon name="arrow-down" size={24} />,
    },
    styleOverrides: {
      select: {
        padding: '0 9px 0 0 !important',
        ':focus': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
      }
    }
  },
  MuiButton: {
    defaultProps: {
      size: 'small',
      color: 'secondary',
      variant: 'contained',
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'unset',
      },
      startIcon: {
        marginLeft: 0,
      },
      containedSecondary: {
        ':hover': {
          backgroundColor: darken(lightCyan, 0.01),
        },
      },
      sizeSmall: {
        fontSize: 14,
        lineHeight: '24px',
        borderRadius: 8,
        padding: '6px 20px',
      },
      sizeMedium: {
        fontSize: 16,
        lineHeight: '24px',
        borderRadius: 12,
        padding: '12px 20px',
      },
      sizeLarge: {
        fontSize: 16,
        lineHeight: '24px',
        borderRadius: 12,
        padding: '14px 32px',
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      size: 'small',
      color: 'primary',
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
      colorPrimary: {
        backgroundColor: lightCyan,
        ':hover': {
          backgroundColor: darken(lightCyan, 0.01),
        },
      },
      sizeSmall: {
        height: 36,
        width: 36,
      },
      sizeMedium: {
        height: 48,
        width: 48,
      },
      sizeLarge: {
        height: 52,
        width: 52,
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: 'none',
        '&.Mui-selected': {
          color: white,
          backgroundColor: `${darkIndigo} !important`,
          ':hover': {
            backgroundColor: darken(darkIndigo, 0.1),
          },
        },
        '&.MuiToggleButton-secondary': {
          backgroundColor: lightCyan,
        },
      },
      sizeSmall: {
        height: 36,
        width: 36,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: shadows[1],
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      root: {
        '.MuiPopover-paper': {
          boxShadow: '0px 0px 12px rgba(85, 101, 129, 0.1)',
        },
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h2',
      },
    },
    styleOverrides: {
      root: {
        padding: '20px 20px 16px',
      },
      action: {
        margin: 0,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        ':hover': {
          backgroundColor: whiteIndigo,
        },
      },
    },
  },
  MuiListItemAvatar: {
    styleOverrides: {
      root: {
        minWidth: 80,
        [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
          minWidth: 60,
        },
      },
    },
  },
  MuiListItemText: {
    defaultProps: {
      primaryTypographyProps: {
        variant: 'subtitle1',
      },
    },
    styleOverrides: {
      root: {
        marginTop: 0,
        marginBottom: 0,
        '.MuiListItemText-secondary': {
          marginTop: 0,
        },
      },
      secondary: {
        marginTop: 2,
      },
    },
  },
  MuiAvatar: {
    defaultProps: {
      variant: 'rounded',
      children: <Icon name="home" />,
    },
    styleOverrides: {
      root: {
        backgroundColor: cyan,
        borderRadius: 10,
        color: darkCyan,
      },
      rounded: {
        width: 64,
        height: 48,
        [`@media (max-width: ${breakpoints.values.sm - 0.5}px)`]: {
          width: 52,
          height: 40,
          borderRadius: 8,
        },
      },
      square: {
        width: 40,
        height: 40,
        [`@media (max-width: ${breakpoints.values.sm - 0.5}px)`]: {
          width: 32,
          height: 32,
          borderRadius: 8,
        },
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 20,
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        '&.MuiTable-stickyHeader': {
          th: {
            borderBottom: `1px solid ${lightCyan}`,
          },
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        borderTop: `1px solid ${cyan}`,
        borderBottom: `1px solid ${cyan}`,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&.MuiTableRow-hover:hover': {
          backgroundColor: whiteIndigo,
        },
        '&.Mui-selected': {
          backgroundColor: whiteIndigo,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: 'none',
        padding: 12,
        whiteSpace: 'nowrap',
        '&.MuiTableCell-head': {
          color: lightIndigo,
        },
        [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
          padding: '3px 12px',
        },
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      root: {
        [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
          li: {
            display: 'none',
            '&:first-child, &:last-child': {
              display: 'list-item',
            },
          },
        },
      },
    },
  },
  MuiPaginationItem: {
    defaultProps: {
      shape: 'rounded',
    },
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: lightCyan,
        },
      },
      page: {
        [`@media (max-width: ${breakpoints.values.md - 1}px)`]: {
          display: 'none',
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: '8px 16px',
        [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
          minHeight: '24px',
          minWidth: '50px',
          padding: '4px 8px',
        },
      },
    },
  },
  MuiChip: {
    defaultProps: {
      color: 'info',
      size: 'small',
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
      label: {
        fontWeight: 500,
      },
      labelSmall: {
        fontSize: 12,
        lineHeight: '20px',
        padding: '2px 10px',
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        [`&:not(.MuiBackdrop-invisible)`]: {
          backgroundColor: `${darkIndigo}50`,
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: cyan,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: 16,
        minWidth: 60,
        lineHeight: '24px',
        padding: '12px 0',
        marginRight: '20px',
        textTransform: 'capitalize',
        '& + &': {
          marginLeft: 20,
        },
      },
    },
  },
};

// Export components
export default components;
