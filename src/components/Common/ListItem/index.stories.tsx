// Select
import { ListItem, IListItemProps } from './index';

// Add Select component to storybook
export default {
  title: 'ListItem',
  component: ListItem,
};

// Default
export const Default = (args: IListItemProps) => (
  <ListItem {...args}>Default</ListItem>
);
