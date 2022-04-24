import styled from "styled-components";
import { formatTime } from "../utils";
import { useEffect, useRef, forwardRef, useState } from "react";
import useSound from "use-sound";

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
  timerStarted,
}) {
  const stepRef = useRef(null);

  const scrollTo = () =>
    stepRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

  const [stepChange] = useSound("/sounds/step-change.wav");
  const [brewEnd] = useSound("/sounds/brew-end.wav");

  useEffect(() => {
    currentInterval === currentGuide.length - 1 ? brewEnd() : stepChange();
    scrollTo();
  }, [currentInterval, timerStarted]);

  const [totalDivHeight, setHeight] = useState(0);

  const totalHeight = useRef(null);

  useEffect(() => {
    setHeight(totalHeight.current.clientHeight);
  }, []);

  return (
    <Container ref={totalHeight}>
      {currentGuide.map((instruction, key) => (
        <Instruction
          time={key === 0 ? "••••" : formatTime(instruction.time)}
          title={instruction.title}
          key={key}
          active={currentInterval === key}
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
