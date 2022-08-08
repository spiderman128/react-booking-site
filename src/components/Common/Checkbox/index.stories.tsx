// Dependencies
import { CheckboxProps } from '@mui/material';

// Component
import { Checkbox } from './index';

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

// Add Checkbox component to storybook
export default {
  title: 'Checkbox',
  component: Checkbox,
};

// Default
export const Default = (args: CheckboxProps) => <Checkbox {...args} />;

// Sizes
export const Sizes = () => (
  <table>
    <tbody>
      {sizes.map(({ label, value }, index) => (
        <tr key={index}>
          <td>{label}</td>
          <td>
            <Checkbox size={value} defaultChecked />
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
      {colors.map(({ label, value }, index) => (
        <tr key={index}>
          <td>{label}</td>
          <td>
            <Checkbox color={value} defaultChecked />
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
      {sizes.map((size) => (
        <tr key={size.value}>
          <td>{size.label}</td>
          {colors.map((color) => (
            <td key={color.value}>
              <Checkbox size={size.value} color={color.value} defaultChecked />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
