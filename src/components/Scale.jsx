import styled from "styled-components";
import { formatTime } from "../utils";

const Container = styled.div`
  display: flex;
  font-family: monospace;
  font-size: 48px;
`;

const Display = styled.span`
  width: 4ch;
`;

const Weight = styled(Display)`
  text-align: right;
`;

export default function Scale({ timer, weight }) {
  return (
    <Container>
      <Display>{formatTime(timer)}</Display>
      <span style={{ opacity: 0.5 }}>|</span>
      <Weight>{weight}g</Weight>
    </Container>
  );
}
