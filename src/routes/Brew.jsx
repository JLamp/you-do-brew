import Instructions from "../components/Instructions";
import Content from "../components/Content";
import useTimer from "../hooks/useTimer";
import { Button } from "../components/Buttons";
import { getCurrentGuide } from "../utils";
import { useState, useEffect } from "react";
import Scale from "../components/Scale";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export default function Brew() {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const [currentInterval, updateCurrentInterval] = useState(0);
  const [timerStarted, updateTimerStarted] = useState(false);

  const preBrew = getCurrentGuide().preBrew;
  const brewInstructions = getCurrentGuide().brew;

  useEffect(() => {
    currentInterval < brewInstructions.length - 1
      ? timer === brewInstructions[currentInterval + 1].time &&
        updateCurrentInterval(currentInterval + 1)
      : null;
  });

  const MainButton = !timerStarted ? (
    <Button
      onClick={() => {
        handleStart();
        updateTimerStarted(true);
      }}
      fullWidth
    >
      Start
    </Button>
  ) : isPaused ? (
    <Button onClick={() => handlePause()} fullWidth>
      Pause
    </Button>
  ) : (
    <ButtonGroup>
      <Button
        icon="restart"
        onClick={() => {
          handleReset();
          updateTimerStarted(!timerStarted);
          updateCurrentInterval(0);
        }}
        variant="secondary"
      />
      <Button onClick={() => handleStart()} fullWidth>
        Resume
      </Button>
    </ButtonGroup>
  );

  return (
    <Content
      title={
        timerStarted ? brewInstructions[currentInterval].title : preBrew.title
      }
      screen={
        <Scale
          timer={timer}
          weight={
            timer === 0 ? "000" : brewInstructions[currentInterval].weight
          }
        />
      }
      body={
        <Instructions
          preBrew={preBrew}
          currentGuide={brewInstructions}
          currentInterval={currentInterval}
          timerStarted={timerStarted}
        />
      }
      footer={MainButton}
    />
  );
}
