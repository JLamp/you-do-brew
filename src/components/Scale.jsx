import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { formatTime } from "../utils";
import CountUp, { useCountUp } from "react-countup";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: monospace;
  gap: 32px;
  width: 100%;
  justify-content: center;
`;

const Display = styled.h2``;

const Weight = styled(Display)`
  text-align: right;
  width: 4ch;
`;

export default function Scale({ timer, weight, isPaused, timerStarted }) {
  return (
    <Container>
      <Display>{formatTime(timer)}</Display>
      <Weight>{weight}</Weight>
    </Container>
  );
}
