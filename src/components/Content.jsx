import styled from "styled-components";
import NavBar from "./NavBar";

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
