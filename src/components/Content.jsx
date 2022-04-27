import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Screen = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Body = styled.div`
  height: 100%;
  overflow: scroll;
`;

const Footer = styled.div`
  align-self: flex-end;
  display: flex;

  & > * {
    width: 100%;
  }
`;

const Content = ({ title, screen, body, footer }) => (
  <>
    <Title>{title}</Title>
    <Screen>{screen}</Screen>
    <Body>{body}</Body>
    <Footer>{footer}</Footer>
  </>
);

export default Content;
