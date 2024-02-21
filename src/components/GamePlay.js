import React, {useState} from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(); 
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return  Math.floor(Math.random() * (max - min) + min);

  };

  const rollDice = () => {

    if(!selectedNumber) {
      setError("Please select a number.")

      return};

    const randomNumber = generateRandomNumber(1, 7)

    setCurrentDice(() => randomNumber);


    if (selectedNumber ===  randomNumber) {
      setScore((prev) =>prev +randomNumber)
    }else{
      setScore((prev) => prev -2 );
    }

    setSelectedNumber(undefined);

  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
  };


  return (
    <MainContainer>
      <div className='top-items'>
        <TotalScore score={score}/>
        <NumberSelector selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice currentDice = {currentDice} setCurrentDice ={setCurrentDice} rollDice = {rollDice}/>
      <div className='btns'>
        <OutlineButton onClick={() => resetScore()}>Reset</OutlineButton>
        <RuleButton onClick={() => setShowRules((prev) => !prev) } >{showRules ? 'Hide': 'Show'} Rules</RuleButton>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.div`
  .top-items{
    display: flex;
    justify-content: space-around;
    margin-top: 70px;
  }

  .btns{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
  }
`;

const OutlineButton = styled.button`
    color: #fff;
    padding: 10px 18px;
    border-radius: 5px;
    background-color: #000;
    min-width: 220px;
    border: 1px solid transparent;
    font-size: 16px;
    cursor: pointer;
    /* align-items: c; */
    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid black;
        transition: 0.2s background ease-in-out ;
    }
`;  

const RuleButton = styled.button`
    color: #fff;
    padding: 10px 18px;
    border-radius: 5px;
    background-color: #000;
    min-width: 220px;
    border: 1px solid transparent;
    font-size: 16px;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid black;
        transition: 0.2s background ease-in-out ;
    }
`;  