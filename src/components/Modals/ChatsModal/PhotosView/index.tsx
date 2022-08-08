// Dependencies
import { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Avatar, Box, Grid, useMediaQuery, useTheme } from '@mui/material';

// Interfaces
interface IPhotosViewProps {
  visible: boolean;
}

// Create Photos view
const PhotosView: FC<IPhotosViewProps> = ({ visible }) => {
  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Return Info view
  return (
    <Box
      sx={(theme) => ({
        p: 20,
        width: { xs: '100%', sm: 280 },
        display: {
          xs: visible ? 'block' : 'none',
          // sm: 'block',
        },
        borderLeft: isMobile
          ? 'none'
          : `1px solid ${theme.palette['lightCyan']}`,
      })}
    >
      <PerfectScrollbar
        style={{
          height: isMobile ? 'calc(100vh - 186px)' : 'fit-content',
        }}
      >
        <Grid container columns={3} spacing={10}>
          {new Array(5).fill('').map(() => (
            <Grid item xs={1}>
              <Avatar
                sx={{
                  width: '100% !important',
                  height: '109px !important',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </PerfectScrollbar>
    </Box>
  );
};

// Export Info view
export default PhotosView;
