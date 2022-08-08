// Component
import { Icon } from '../Icon';
import { Button, IButtonProps } from './index';

// Add Button component to storybook
export default {
  title: 'Button',
  component: Button,
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
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
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
    label: 'Inherit',
    value: 'inherit',
  },
];

const variants: {
  label: string;
  value: 'text' | 'outlined' | 'contained';
}[] = [
  {
    label: 'Text',
    value: 'text',
  },
  {
    label: 'Contained',
    value: 'contained',
  },
  {
    label: 'Outlined',
    value: 'outlined',
  },
];

const withIcons: {
  label: string;
  position: 'start' | 'end';
  value: React.ReactNode;
}[] = [
  {
    label: 'Start Icon',
    position: 'start',
    value: <Icon name="plus-lg" />,
  },
  {
    label: 'End Icon',
    position: 'end',
    value: <Icon name="x-lg" />,
  },
];

// Default
export const Default = (args: IButtonProps) => (
  <Button {...args}>Default</Button>
);

// Sizes
export const Sizes = () => (
  <div>
    {sizes.map(({ value, label }) => (
      <p>
        <Button size={value}>{label}</Button>
      </p>
    ))}
  </div>
);

// Colors
export const Colors = () => (
  <div>
    {colors.map(({ label, value }) => (
      <p>
        <Button color={value}>{label}</Button>
      </p>
    ))}
  </div>
);

// Variants
export const Variants = () => (
  <div>
    {variants.map(({ label, value }) => (
      <p>
        <Button variant={value}>{label}</Button>
      </p>
    ))}
  </div>
);

// With icons
export const WithIcon = () => (
  <table>
    <tbody>
      <tr>
        <td />
        {withIcons.map(({ label }, index) => (
          <td key={index}>{label}</td>
        ))}
      </tr>
      {sizes.map((size) => (
        <tr key={size.value}>
          <td>{size.label}</td>
          {withIcons.map((withIcon, index) => (
            <td key={index}>
              <Button
                size={size.value}
                startIcon={withIcon.position === 'start' && withIcon.value}
                endIcon={withIcon.position === 'end' && withIcon.value}
              >
                {withIcon.label}
              </Button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
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
                    <Button
                      size={size.value}
                      variant={variant.value}
                      color={color.value}
                    >
                      {color.label}
                    </Button>
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
