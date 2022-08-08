// Component
import { IconButtonProps } from '@mui/material';
import { iconList } from 'icomoon-react';

// Icon set
import iconSet from '../../../assets/icomoon/selection.json';

// Components
import { Icon } from '../Icon';
import { IconButton } from './index';

// Add to IconButton to storybook
export default {
  title: 'IconButton',
  component: IconButton,
};

// Constants
const sizes: {
  label: string;
  value: 'small' | 'medium' | 'large';
}[] = [
  {
    label: 'Small',
    value: 'small',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'Large',
    value: 'large',
  },
];

const colors: {
  label: string;
  value:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}[] = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Primary',
    value: 'primary',
  },
  {
    label: 'Secondary',
    value: 'secondary',
  },
  {
    label: 'Success',
    value: 'success',
  },
  {
    label: 'Error',
    value: 'error',
  },
  {
    label: 'Info',
    value: 'info',
  },
  {
    label: 'Warning',
    value: 'warning',
  },
  {
    label: 'Inherit',
    value: 'inherit',
  },
];

// Default
export const Default = (args: IconButtonProps) => (
  <IconButton {...args}>
    <Icon name="home" />
  </IconButton>
);

// Sizes
export const Sizes = () => (
  <table>
    <tbody>
      {sizes.map(({ value, label }) => (
        <tr key={value}>
          <td>{label}</td>
          <td>
            <IconButton size={value}>
              <Icon name="home" />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Colors
export const Colors = () => (
  <table>
    <tbody>
      {colors.map(({ label, value }) => (
        <tr key={value}>
          <td>{label}</td>
          <td>
            <IconButton color={value}>
              <Icon name="home" />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Dashboard
export const Dashboard = () => (
  <table>
    <tbody>
      <tr>
        <td />
        {sizes.map((size) => (
          <td key={size.value}>{size.label}</td>
        ))}
      </tr>
      {iconList(iconSet).map((icon) => (
        <tr key={icon}>
          <td>{icon}</td>
          {sizes.map((size) => (
            <td key={size.value}>
              <IconButton size={size.value}>
                <Icon name={icon} />
              </IconButton>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
