import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, forwardRef, useState } from 'react';
import useSound from 'use-sound';
import { formatTime } from '../utils';
import { Icon } from './Icon/Icon';

const GAP = '24px';

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
  gap: 16px;
  line-height: 1.5;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity 1s;
`;

const Time = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-variant-numeric: tabular-nums;
  font-weight: 900;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

const Weight = styled.span`
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  font-weight: 700;
  gap: 8px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: all 0.5s;
`;

const iconAnimation = keyframes`
  from {
    transform: translateX(-4px);
  }

  to {
    transform: translateX(4px);
  }
`;

const PourIcon = styled(Icon).attrs(() => ({
  type: 'right-arrow',
  size: 'sm',
}))`
  transition: all 0.5s;
  opacity: ${({ active }) => (active ? 1 : 0)};
  animation: ${iconAnimation} 1s ease-in-out infinite alternate;
`;

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.line};
  height: 1px;
  margin-top: ${GAP};
  width: 100%;
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
    ref,
  ) => {
    const [instructionHeight, setInstructionHeight] = useState(0);
    const instructionHeightRef = useRef(0);
    useEffect(() => {
      setInstructionHeight(instructionHeightRef.current.clientHeight);
    }, []);

    const bottomPadding = lastInstruction ? totalDivHeight - instructionHeight : null;

    return (
      <span ref={instructionHeightRef} style={{ paddingBottom: bottomPadding }}>
        <InstructionContainer
          ref={active ? ref : null}
          active={active}
          data-test-id="instruction-container"
        >
          {!firstInstruction && <Time>{time}</Time>}
          <Text>
            <Header>
              {}
              <h3>{currentInstruction.title}</h3>
              {currentInstruction.pourDuration > 0 && (
                <Weight
                  visible={
                    active && timer < currentInstruction.time + currentInstruction.pourDuration
                  }
                >
                  <PourIcon
                    active={
                      timer < currentInstruction.time + currentInstruction.pourDuration &&
                      isPaused &&
                      active
                    }
                  />
                  <span>
                    {currentInstruction.targetWeight}g //{' '}
                    {formatTime(currentInstruction.time + currentInstruction.pourDuration)}
                  </span>
                </Weight>
              )}
            </Header>
            <p>{currentInstruction.instruction}</p>
          </Text>
        </InstructionContainer>
        <Divider />
      </span>
    );
  },
);

const Instructions = ({ currentGuide, currentInterval, timerStarted, isPaused, timer }) => {
  const stepRef = useRef(null);

  const scrollTo = () =>
    stepRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

  const [stepChange] = useSound('/sounds/step-change.wav');
  const [brewEnd] = useSound('/sounds/brew-end.wav');

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
          key={instruction}
          ref={stepRef}
          active={currentInterval === key}
          containerHeight={totalDivHeight}
          currentInstruction={instruction}
          firstInstruction={key === 0}
          isPaused={isPaused}
          lastInstruction={key === currentGuide.length - 1}
          time={formatTime(instruction.time ? instruction.time : 0)}
          timer={timer}
          totalDivHeight={totalDivHeight}
        />
      ))}
    </Container>
  );
};

export default Instructions;
