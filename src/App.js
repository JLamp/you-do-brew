import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  padding: 16px 24px 24px 24px;
  background: ${({ theme }) => theme.colors.paper};
  gap: 24px;
  overflow: hidden;
  & > * {
    width: 100%;
  }
`;

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
