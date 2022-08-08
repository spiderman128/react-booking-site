// Dependencies
import React from 'react';

// Components
import { Icon } from '../Icon';
import { IInputProps, Input } from './index';

// Add Input component to storybook
export default {
  title: 'Input',
  component: Input,
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

const withIcons: {
  label: string;
  position: 'start' | 'end';
  value: React.ReactNode;
}[] = [
  {
    label: 'Start Icon',
    position: 'start',
    value: <Icon name="search" />,
  },
  {
    label: 'End Icon',
    position: 'end',
    value: <Icon name="eye" />,
  },
];

// Default
export const Default = (args: IInputProps) => <Input {...args} />;
Default.args = {
  placeholder: 'Please input...',
};

// Sizes
export const Sizes = () => (
  <table>
    <tbody>
      {sizes.map(({ label, value }) => (
        <tr key={value}>
          <td>{label}</td>
          <td>
            <Input size={value} placeholder="Please input..." />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// With icon
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
              <Input
                size={size.value}
                placeholder="Please input..."
                startAdornment={withIcon.position === 'start' && withIcon.value}
                endAdornment={withIcon.position === 'end' && withIcon.value}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
