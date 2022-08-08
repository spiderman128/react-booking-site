// Components
import { ITypographyProps, Typography } from './index';

// Add Typography component to storybook
export default {
  title: 'Typography',
  component: Typography,
};

// Constants
const variants: {
  label: string;
  value:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption';
}[] = [
  {
    label: 'Heading 1',
    value: 'h1',
  },
  {
    label: 'Heading 2',
    value: 'h2',
  },
  {
    label: 'Heading 3',
    value: 'h3',
  },
  {
    label: 'Subtitle 1',
    value: 'subtitle1',
  },
  {
    label: 'Subtitle 2',
    value: 'subtitle2',
  },
  {
    label: 'Body 1',
    value: 'body1',
  },
  {
    label: 'Body 2',
    value: 'body2',
  },
  {
    label: 'Caption',
    value: 'caption',
  },
];

const colors: {
  label: string;
  value: 'inherit' | 'primary' | 'secondary' | 'error';
}[] = [
  {
    label: 'Inherit',
    value: 'inherit',
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
    label: 'Error',
    value: 'error',
  },
];

const textAlign: {
  label: string;
  value: 'left' | 'center' | 'right' | 'inherit' | 'justify';
}[] = [
  {
    label: 'Left aligned text.',
    value: 'left',
  },
  {
    label: 'Center aligned text.',
    value: 'center',
  },
  {
    label: 'Right aligned text.',
    value: 'right',
  },
  {
    label: 'Inherit aligned text.',
    value: 'inherit',
  },
  {
    label: 'Justify aligned text.',
    value: 'justify',
  },
];

const fontWeight: {
  label: string;
  value: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}[] = [
  {
    label: 'Font Weight: 100',
    value: 100,
  },
  {
    label: 'Font Weight: 200',
    value: 200,
  },
  {
    label: 'Font Weight: 300',
    value: 300,
  },
  {
    label: 'Font Weight: 400',
    value: 400,
  },
  {
    label: 'Font Weight: 500',
    value: 500,
  },
  {
    label: 'Font Weight: 600',
    value: 600,
  },
  {
    label: 'Font Weight: 700',
    value: 700,
  },
  {
    label: 'Font Weight: 800',
    value: 800,
  },
  {
    label: 'Font Weight: 900',
    value: 900,
  },
];

// Default
export const Default = (args: ITypographyProps) => <Typography {...args} />;
Default.args = {
  children: 'Typography',
};

// Variants
export const Variants = () => (
  <div>
    {variants.map(({ label, value }) => (
      <p>
        <Typography variant={value}>{label}</Typography>
      </p>
    ))}
  </div>
);

// Colors
export const Colors = () => (
  <div>
    {colors.map(({ label, value }) => (
      <Typography color={value}>{label}</Typography>
    ))}
  </div>
);

// Text align
export const TextAlign = () => (
  <div>
    {textAlign.map(({ label, value }) => (
      <p>
        <Typography textAlign={value}>{label}</Typography>
      </p>
    ))}
  </div>
);

// Font weight
export const FontWeight = () => (
  <div>
    {fontWeight.map(({ label, value }) => (
      <p>
        <Typography fontWeight={value}>{label}</Typography>
      </p>
    ))}
  </div>
);
