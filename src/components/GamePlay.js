import React, {useState} from 'react'
import { Button, OutlineButton } from '../styled/Button';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1); // Initialize with a default value
    const [error, setError] = useState('');

    const generateNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min); // Fix random number generation
    };

    const rollDice = () => {
        if(!selectedNumber) {
            setError('You have not selected any number');
            return;
        }

        const randomNumber = generateNumber(1, 6);
        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber){
            setScore(prev => prev + randomNumber);
        }else {
            setScore(prev => prev - 2)
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score={score} />
                <NumberSelector setError = {setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>      
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className='btns'>
                <OutlineButton onClick={resetScore} >Reset</OutlineButton>
                {/* <Button>Show Rules</Button> */}
            </div>
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
    padding-top: 70px;
    .top-section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
