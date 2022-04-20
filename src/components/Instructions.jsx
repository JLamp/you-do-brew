import styled from "styled-components";
import { formatTime } from "../utils";
import { useEffect, useRef, forwardRef, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InstructionContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 1.5;
  gap: 16px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

const Time = styled.span`
  font-weight: 900;
  font-variant-numeric: tabular-nums;
  font-family: ${({ theme }) => theme.font.mono};
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
`;

const Instruction = forwardRef(({ time, title, children, active }, ref) => {
  return (
    <InstructionContainer active={active} ref={active ? ref : null}>
      <Time>{time}</Time>
      <Text>
        <h3>{title}</h3>
        <p>{children}</p>
      </Text>
    </InstructionContainer>
  );
});

export default function Instructions({ currentGuide, currentInterval }) {
  const stepRef = useRef(null);

  const scrollTo = () =>
    stepRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

  useEffect(() => {
    scrollTo();
  }, [currentInterval]);

  return (
    <Container>
      {currentGuide.map((instruction, key) => (
        <Instruction
          time={formatTime(instruction.time)}
          title={instruction.title}
          key={key}
          active={currentInterval === key}
          ref={stepRef}
        >
          {instruction.instruction}
        </Instruction>
      ))}
    </Container>
  );
}
