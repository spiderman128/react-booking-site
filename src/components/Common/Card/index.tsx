// Dependencies
import { ChangeEvent, FC, ReactNode, useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { SxProps } from '@mui/system';

// Components
import { Input } from '../Input';
import { Icon } from '../Icon';

// Styles
import * as S from './styles';
import {useTranslation} from 'react-i18next';

// Interfaces
export interface ICardProps {
  title: ReactNode;
  titleColor?: string;
  subheader?: ReactNode;
  headerDivider?: boolean;
  contentHeight?: string | number;
  contentPadding?: string | number;
  children: ReactNode;
  action?: ReactNode;
  sx?: SxProps;
  searchable?: boolean;
  search?: string;
  onSearch?: (value: string) => void;
}

// Export Card component
export const Card: FC<ICardProps> = ({
  title,
  subheader,
  headerDivider,
  children,
  contentHeight,
  contentPadding,
  action,
  sx,
  searchable,
  onSearch,
  search,
  titleColor="primary.main",
}) => {
  // Get translatio from hook
  const { t } = useTranslation();

  // States
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Toggle search input handler
  const handleToggleSearchInput = () => {
    setIsSearching(!isSearching);
  };

  // Search change handler
  const handleSearchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const TitleComponent = ({ title, color }) => {
    return (
      <div>
        <Box 
          component="span" 
          sx={{
            backgroundColor: color, 
            color: color, 
            mr: 15, 
            borderRadius: '5px'
          }}
        >
          $
        </Box>
        {title}
      </div>
    );
  };

  // Return Card component
  return (
    <S.Card sx={sx}>
      <S.CardHeader
        title={!isSearching && <TitleComponent title={title} color={titleColor} />}
        subheader={subheader}
        headerDivider={headerDivider}
        className={isSearching ? 'is-searching' : ''}
        action={
          <>
            {searchable && isSearching ? (
              <Stack direction="row" spacing={8}>
                <Input
                  value={search}
                  placeholder={t('dashboard.search')}
                  onChange={handleSearchChange}
                  size="small"
                />
                <IconButton onClick={handleToggleSearchInput}>
                  <Icon name="x-lg" />
                </IconButton>
              </Stack>
            ) : (
              <Stack direction="row" spacing={8}>
                {searchable && (
                  <IconButton onClick={handleToggleSearchInput}>
                    <Icon name="search" />
                  </IconButton>
                )}
                {action}
              </Stack>
            )}
          </>
        }
      />
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <S.CardContent height={contentHeight} padding={contentPadding}>
          {children}
        </S.CardContent>
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>{children}</Box>
    </S.Card>
  );
};
