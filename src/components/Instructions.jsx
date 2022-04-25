import styled, { keyframes } from "styled-components";
import { formatTime } from "../utils";
import { useEffect, useRef, forwardRef, useState } from "react";
import useSound from "use-sound";
import { Icon } from "../components/Icon/Icon";

const GAP = "24px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP};
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Weight = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const iconAnimation = keyframes`
  from {
    transform: translateX(-4px);
  }

  to {
    transform: translateX(4px);
  }
`;

const PourIcon = styled(Icon).attrs(({ type, size }) => ({
  type: "right-arrow",
  size: "sm",
}))`
  transition: all 0.5s;
  opacity: ${({ active }) => (active ? 1 : 0)};
  animation: ${iconAnimation} 1s ease-in-out infinite alternate;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.line};
  margin-top: ${GAP};
`;

const Instruction = forwardRef(
  (
    {
      time,
      active,
      lastInstruction,
      totalDivHeight,
      currentInstruction,
      isPaused,
      timer,
      firstInstruction,
    },
    ref
  ) => {
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
        <InstructionContainer
          active={active}
          ref={active ? ref : null}
          data-test-id="instruction-container"
        >
          {!firstInstruction && <Time>{time}</Time>}
          <Text>
            <Header>
              {}
              <h3>{currentInstruction.title}</h3>
              {currentInstruction.pourDuration > 0 && (
                <Weight>
                  <PourIcon
                    active={
                      timer <
                        currentInstruction.time +
                          currentInstruction.pourDuration &&
                      isPaused &&
                      active
                    }
                  />
                  <span>{currentInstruction.targetWeight}g</span>
                </Weight>
              )}
            </Header>
            <p>{currentInstruction.instruction}</p>
          </Text>
        </InstructionContainer>
        {firstInstruction && <Divider />}
      </span>
    );
  }
);

export default function Instructions({
  currentGuide,
  currentInterval,
  timerStarted,
  isPaused,
  timer,
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
        <>
          <Instruction
            time={formatTime(instruction.time)}
            firstInstruction={key === 0}
            currentInstruction={instruction}
            key={key}
            active={currentInterval === key}
            isPaused={isPaused}
            ref={stepRef}
            containerHeight={totalDivHeight}
            lastInstruction={key === currentGuide.length - 1}
            totalDivHeight={totalDivHeight}
            timer={timer}
          />
        </>
      ))}
    </Container>
  );
}
