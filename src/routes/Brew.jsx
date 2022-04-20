import Instructions from "../components/Instructions";
import Content from "../components/Content";
import useTimer from "../hooks/useTimer";
import { Button, ButtonLink } from "../components/Buttons";
import { getCurrentGuide } from "../utils";
import { useState, useEffect, useRef } from "react";
import Scale from "../components/Scale";

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

  const [currentInterval, updateInterval] = useState(0);
  const [timerStarted, updateTimerStarted] = useState(false);

  const preBrew = getCurrentGuide().preBrew;
  const brewInstructions = getCurrentGuide().brew;

  useEffect(() => {
    currentInterval < brewInstructions.length - 1
      ? timer === brewInstructions[currentInterval + 1].time &&
        updateInterval(currentInterval + 1)
      : null;
  });

  const MainButton = !timerStarted ? (
    <Button
      onClick={() => {
        handleStart();
        updateTimerStarted(true);
      }}
    >
      Start
    </Button>
  ) : isPaused ? (
    <Button onClick={() => handlePause()}>Pause</Button>
  ) : (
    <Button onClick={() => handleStart()}>Resume</Button>
  );

  return (
    <Content
      title={brewInstructions[currentInterval].title}
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
