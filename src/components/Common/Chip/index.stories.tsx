// Dependencies
import { ChipProps } from '@mui/material';

// Component
import { Chip } from './index';

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

const variants: {
  label: string;
  value: 'filled' | 'outlined';
}[] = [
  {
    label: 'Filled',
    value: 'filled',
  },
  {
    label: 'Outlined',
    value: 'outlined',
  },
];

// Add Chip component
export default {
  title: 'Chip',
  component: Chip,
};

// Default
export const Default = (args: ChipProps) => <Chip {...args} />;
Default.args = {
  label: 'Default',
};

// Sizes
export const Sizes = () => (
  <div>
    {sizes.map(({ label, value }, index) => (
      <p key={index}>
        <Chip size={value} label={label} />
      </p>
    ))}
  </div>
);

// Colors
export const Colors = () => (
  <div>
    {colors.map(({ label, value }, index) => (
      <p key={index}>
        <Chip color={value} label={label} />
      </p>
    ))}
  </div>
);

// Variants
export const Variants = () => (
  <div>
    {variants.map(({ label, value }, index) => (
      <p key={index}>
        <Chip variant={value} label={label} />
      </p>
    ))}
  </div>
);

// Dashboard
export const Dashboard = () => (
  <div>
    {variants.map((variant) => (
      <div key={variant.value}>
        <h4>{variant.label}</h4>
        <table>
          <tbody>
            {sizes.map((size) => (
              <tr key={size.value}>
                <td>{size.label}</td>
                {colors.map((color) => (
                  <td key={color.value}>
                    <Chip
                      size={size.value}
                      variant={variant.value}
                      color={color.value}
                      label={color.label}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
);
