import styled from 'styled-components';
import { formatTime } from '../utils';

const Container = styled.div`
  align-items: center;
  display: flex;
  font-family: monospace;
  gap: 32px;
  justify-content: center;
  width: 100%;
`;

const Display = styled.h2``;

const Weight = styled(Display)`
  text-align: right;
  width: 4ch;
`;

export default function Scale({ timer, weight }) {
  return (
    <Container>
      <Display>{formatTime(timer)}</Display>
      <Weight>{weight}</Weight>
    </Container>
  );
}
