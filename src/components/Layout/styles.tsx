// Dependencies
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Export styled components
export const Layout = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.lightCyan};
`;

export const Aside = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// @ts-ignore
export const Content = styled(PerfectScrollbar)`
  height: calc(100vh - 92px);
  padding: 36px;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 16px;
    height: calc(100vh - 120px);
  }
`;
