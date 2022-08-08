// Dependencies
import { FC } from 'react';
import { ListItemText, Stack } from '@mui/material';

// Components
import { Icon, IconButton } from '../../../Common';

// Interface
interface IMobileHeaderProps {
  title: string;
  subtitle: string;
  onGoBack: () => void;
}

// Create MobileHeader component
const MobileHeader: FC<IMobileHeaderProps> = ({
  title,
  subtitle,
  onGoBack,
}) => {
  return (
    <Stack height={27} direction="row" alignItems="center" spacing={16}>
      <IconButton onClick={onGoBack}>
        <Icon name="arrow-back" />
      </IconButton>
      <ListItemText
        primary={title}
        secondary={subtitle}
        primaryTypographyProps={{ variant: 'h2', sx: { mb: -3 } }}
        secondaryTypographyProps={{ variant: 'caption' }}
      />
    </Stack>
  );
};

// Export MobileHeader component
export default MobileHeader;
