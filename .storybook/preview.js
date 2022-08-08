// Dependencies
import { addDecorator } from '@storybook/react';

// App
import App from '../src/App';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((storyFn) => <App>{storyFn()}</App>);
