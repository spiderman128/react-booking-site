// Select
import { Select } from './index';
import { SelectProps } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase/InputBase';

// Add Select component to storybook
export default {
  title: 'Select',
  component: Select,
};

// Constants
const sizes: {
  label: string;
  value: OverridableStringUnion<
    'small' | 'medium' | 'large',
    InputBasePropsSizeOverrides
  >;
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

// Default
export const Default = (args: SelectProps) => <Select {...args} />;

// Sizes
export const Sizes = () => (
  <table>
    <tbody>
      {sizes.map(({ label, value }) => (
        <tr key={value}>
          <td>{label}</td>
          <td>
            <Select size={value} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
