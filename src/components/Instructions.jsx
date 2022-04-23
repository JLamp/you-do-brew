import styled from "styled-components";
import { formatTime } from "../utils";
import { useEffect, useRef, forwardRef, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
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

const Instruction = forwardRef(
  ({ title, time, children, active, lastInstruction, totalDivHeight }, ref) => {
    const [instructionHeight, setInstructionHeight] = useState(0);
    const instructionHeightRef = useRef(0);
    useEffect(() => {
      setInstructionHeight(instructionHeightRef.current.clientHeight);
    }, []);

    const bottomPadding = lastInstruction
      ? totalDivHeight - instructionHeight
      : null;

    return (
      <span ref={instructionHeightRef} style={{ paddingBottom: bottomPadding }}>
        <InstructionContainer active={active} ref={active ? ref : null}>
          <Time>{time}</Time>
          <Text>
            <h3>{title}</h3>
            <p>{children}</p>
          </Text>
        </InstructionContainer>
      </span>
    );
  }
);

export default function Instructions({
  currentGuide,
  currentInterval,
  preBrew,
  timerStarted,
}) {
  const stepRef = useRef(null);

  const scrollTo = () =>
    stepRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

  useEffect(() => {
    scrollTo();
  }, [currentInterval, timerStarted]);

  const [totalDivHeight, setHeight] = useState(0);

  const totalHeight = useRef(null);

  useEffect(() => {
    setHeight(totalHeight.current.clientHeight);
  }, []);

  return (
    <Container ref={totalHeight}>
      <Instruction
        time="••••"
        title={preBrew.title}
        active={!timerStarted}
        ref={!timerStarted ? stepRef : null}
      >
        {preBrew.instruction}
      </Instruction>
      {currentGuide.map((instruction, key) => (
        <Instruction
          time={formatTime(instruction.time)}
          title={instruction.title}
          key={key}
          active={timerStarted && currentInterval === key}
          ref={stepRef}
          containerHeight={totalDivHeight}
          lastInstruction={key === currentGuide.length - 1}
          totalDivHeight={totalDivHeight}
        >
          {instruction.instruction}
        </Instruction>
      ))}
    </Container>
  );
}
