import styled from "styled-components";
import { formatTime } from "../utils";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: monospace;
  gap: 48px;
`;

const Display = styled.h2`
  width: 4ch;
`;

const Weight = styled(Display)`
  text-align: right;
`;

export default function Scale({ timer, weight }) {
  return (
    <Container>
      <Display>{formatTime(timer)}</Display>
      <Weight>{weight}g</Weight>
    </Container>
  );
}
