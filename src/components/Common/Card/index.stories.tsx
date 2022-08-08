// Select
import { Card, ICardProps } from './index';
import { useState } from 'react';
import { Icon } from '../Icon';
import { IconButton } from '@mui/material';

// Add Select component to storybook
export default {
  title: 'Card',
  component: Card,
};

// Default
export const Default = (args: ICardProps) => (
  <Card
    title="Default Card"
    action={
      <IconButton>
        <Icon name="funnel-fill" />
      </IconButton>
    }
  >
    Default
  </Card>
);

// Search Icon
export const SearchButton = (args: ICardProps) => {
  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Card
      title="Card with search button"
      onSearch={handleSearch}
      search={search}
    >
      Default
    </Card>
  );
};
