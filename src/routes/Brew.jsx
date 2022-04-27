import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useCountUp } from 'react-countup';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Instructions from '../components/Instructions';
import Content from '../components/Content';
import useTimer from '../hooks/useTimer';
import { Button, ButtonLink } from '../components/Buttons';
import Scale from '../components/Scale';

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Brew = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } =
    useTimer(0);

  const [currentInterval, updateCurrentInterval] = useState(0);
  const [timerStarted, updateTimerStarted] = useState(false);
  const [currentWeight, updateCurrentWeight] = useState(0);
  const [currentDuration, updateCurrentDuration] = useState(0);
  const [previousWeight, updatePreviousWeight] = useState(0);

  const brewInstructions = useOutletContext().instructionList;

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
    duration: currentDuration > 0 ? currentDuration : 2, // needs to have something > 0
    suffix: 'g',
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
            fullWidth={true}
            onClick={() => {
              handleBrewStart();
            }}
          >
            Start
          </Button>
        ) : isPaused ? (
          <Button
            fullWidth={true}
            onClick={() => {
              handleBrewPause();
            }}
          >
            Pause
          </Button>
        ) : (
          <Button
            fullWidth={true}
            onClick={() => {
              handleBrewResume();
            }}
          >
            Resume
          </Button>
        )
      ) : (
        <ButtonLink fullWidth={true} to="/" variant="secondary">
          Back to Home
        </ButtonLink>
      )}
    </ButtonGroup>
  );

  return (
    <Content
      body={
        <Instructions
          currentGuide={brewInstructions}
          currentInterval={currentInterval}
          isPaused={isPaused}
          timer={timer}
          timerStarted={timerStarted}
        />
      }
      footer={MainButtonGroup}
      screen={
        <Scale isPaused={isPaused} timer={timer} timerStarted={timerStarted} weight={Weight} />
      }
      title={brewInstructions[currentInterval].title}
    />
  );
};

export default Brew;
