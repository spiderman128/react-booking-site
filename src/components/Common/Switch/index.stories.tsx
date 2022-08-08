// Dependencies
import { SwitchProps } from '@mui/material';

// Component
import { Switch } from './index';

// Constants
const colors: {
  label: string;
  value:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default';
}[] = [
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
    label: 'Default',
    value: 'default',
  },
];

// Constants
const sizes: {
  label: string;
  value: 'small' | 'medium';
}[] = [
  {
    label: 'Small',
    value: 'small',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
];

// Add Switch component to storybook
export default {
  title: 'Switch',
  component: Switch,
};

// Default
export const Default = (args: SwitchProps) => <Switch {...args} />;
Default.args = {
  defaultChecked: true,
};

// Colors
export const Colors = () => (
  <table>
    <tbody>
      {colors.map(({ label, value }, index) => (
        <tr key={index}>
          <td>{label}</td>
          <td>
            <Switch color={value} defaultChecked />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Sizes
export const Sizes = () => (
  <table>
    <tbody>
      {sizes.map(({ label, value }, index) => (
        <tr key={index}>
          <td>{label}</td>
          <td>
            <Switch size={value} defaultChecked />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
