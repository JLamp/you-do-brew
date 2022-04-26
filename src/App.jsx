import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  max-height: 844px;
  max-width: 390px;
  overflow: hidden;
  padding: 16px 24px 24px 24px;
  width: 100%;
  & > * {
    width: 100%;
  }
`;

const App = () => (
  <Container>
    <Outlet />
  </Container>
);

export default App;
