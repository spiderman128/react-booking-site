// Dependencies
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Export styled components
export const TabPanel = styled(PerfectScrollbar)`
  margin-top: 44px;
  height: calc(100vh - 476px);

  ${(props) => props.theme.breakpoints.down('lg')} {
    height: calc(100vh - 514px);
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-top: 32px;
    width: calc(100vw - 64px);
    height: calc(100vh - 490px);
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    height: calc(100vh - 466px);
  }
`;
