import Instructions from "../components/Instructions";
import Content from "../components/Content";
import useTimer from "../hooks/useTimer";
import { Button } from "../components/Buttons";
import { getCurrentGuide } from "../utils";
import { useState, useEffect, useRef } from "react";
import Scale from "../components/Scale";
import styled from "styled-components";
import { useCountUp } from "react-countup";

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
  const [currentWeight, updateCurrentWeight] = useState([0, 0]);
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
      (updatePreviousWeight(currentWeight[0]),
      updateCurrentWeight(brewInstructions[currentInterval].weight));
  }, [currentInterval]);

  const countUpRef = useRef(null);

  const { start, pauseResume, reset } = useCountUp({
    ref: countUpRef,
    start: previousWeight,
    end: currentWeight[0],
    duration: currentWeight[1],
    suffix: "g",
  });

  const Weight = <div ref={countUpRef} />;

  const MainButton = !timerStarted ? (
    <Button
      onClick={() => {
        handleStart();
        updateTimerStarted(true);
        start();
        updateCurrentInterval(1);
      }}
      fullWidth
    >
      Start
    </Button>
  ) : isPaused ? (
    <Button
      onClick={() => {
        handlePause();
        pauseResume();
      }}
      fullWidth
    >
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
          reset();
        }}
        variant="secondary"
      />
      <Button
        onClick={() => {
          handleStart();
          pauseResume();
        }}
        fullWidth
      >
        Resume
      </Button>
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
        />
      }
      footer={MainButton}
    />
  );
}
