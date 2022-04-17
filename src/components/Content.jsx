import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
`;

const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  height: 100%;
  overflow: scroll;
`;

const Footer = styled.div`
  align-self: flex-end;
  display: flex;
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
