import Instructions from "../components/Instructions";
import Content from "../components/Content";
import useTimer from "../hooks/useTimer";
import { Button, ButtonLink } from "../components/Buttons";
import { getCurrentGuide } from "../utils";
import { useState, useEffect, useRef } from "react";
import Scale from "../components/Scale";
import styled from "styled-components";
import { useCountUp } from "react-countup";
import { useNavigate } from "react-router-dom";

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
  const [currentWeight, updateCurrentWeight] = useState(0);
  const [currentDuration, updateCurrentDuration] = useState(0);
  const [previousWeight, updatePreviousWeight] = useState(0);

  const brewInstructions = getCurrentGuide().brew;

  useEffect(() => {
    currentInterval > 0 && currentInterval < brewInstructions.length - 1
      ? timer === brewInstructions[currentInterval + 1].time &&
        updateCurrentInterval(currentInterval + 1)
      : null;
  }, [timer]);

  useEffect(() => {
    currentInterval > 0 &&
      currentInterval < brewInstructions.length - 1 &&
      (updatePreviousWeight(currentWeight),
      updateCurrentWeight(brewInstructions[currentInterval].targetWeight),
      updateCurrentDuration(brewInstructions[currentInterval].pourDuration));
  }, [currentInterval]);

  const countUpRef = useRef(null);

  const { start, pauseResume, reset } = useCountUp({
    ref: countUpRef,
    start: previousWeight,
    end: currentWeight,
    duration: currentDuration,
    suffix: "g",
  });

  const Weight = <div ref={countUpRef} />;

  const handleBrewStart = () => {
    handleStart();
    updateTimerStarted(true);
    start();
    updateCurrentInterval(1);
  };

  const handleBrewReset = () => {
    handleReset();
    updateTimerStarted(!timerStarted);
    updateCurrentInterval(0);
    reset();
    updateCurrentWeight(0);
    updateCurrentDuration(0);
  };

  const handleBrewPause = () => {
    handlePause();
    pauseResume();
  };

  const handleBrewResume = () => {
    handleResume();
    pauseResume();
  };

  const navigate = useNavigate();

  const MainButtonGroup = (
    <ButtonGroup>
      {timerStarted ? (
        <Button
          icon="restart"
          onClick={() => {
            handleBrewReset();
          }}
          variant="secondary"
        />
      ) : (
        <Button icon="left-arrow" onClick={() => navigate(-1)} />
      )}

      {currentInterval < brewInstructions.length - 1 ? (
        !timerStarted ? (
          <Button
            onClick={() => {
              handleBrewStart();
            }}
            fullWidth
          >
            Start
          </Button>
        ) : isPaused ? (
          <Button
            onClick={() => {
              handleBrewPause();
            }}
            fullWidth
          >
            Pause
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleBrewResume();
            }}
            fullWidth
          >
            Resume
          </Button>
        )
      ) : (
        <ButtonLink to="/" variant="secondary" fullWidth>
          Back to Home
        </ButtonLink>
      )}
    </ButtonGroup>
  );

  return (
    <Content
      title={brewInstructions[currentInterval].title}
      screen={
        <Scale
          timer={timer}
          weight={Weight}
          isPaused={isPaused}
          timerStarted={timerStarted}
        />
      }
      body={
        <Instructions
          currentGuide={brewInstructions}
          currentInterval={currentInterval}
          timerStarted={timerStarted}
          isPaused={isPaused}
          timer={timer}
        />
      }
      footer={MainButtonGroup}
    />
  );
}
