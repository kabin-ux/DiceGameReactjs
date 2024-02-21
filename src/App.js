import React, { useState } from 'react';
import StartGame from './components/StartGame';
import './App.css';
import GamePlay from './components/GamePlay';

const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <>
      {
        isGameStarted ? <GamePlay /> :
        <StartGame toggleGamePlay = {toggleGamePlay}/>
      }
    </>
  )
}

export default App
