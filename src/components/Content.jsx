import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Screen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  }
`;

const Body = styled.div`
  overflow: scroll;
  height: 100%;
`;

const Footer = styled.div`
  align-self: flex-end;
  display: flex;
  & > * {
    width: 100%;
  }
`;

export default function Content({ title, screen, body, footer }) {
  return (
    <>
      <Title>{title}</Title>
      <Screen>{screen}</Screen>
      <Body>{body}</Body>
      <Footer>{footer}</Footer>
    </>
  );
}
