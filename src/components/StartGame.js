import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';
import dices from '../imgs/dices.png';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src = {dices} alt = 'dice'/>
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>
                Play
            </Button>
        </div>

    </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`;

