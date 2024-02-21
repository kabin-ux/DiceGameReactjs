import React from 'react';
import styled from 'styled-components';
import dice from '../imgs/dices.png';

const StartGame = ({toggleGamePlay}) => {
    return (
    <Container>
        <img src= {dice} alt='dice'/>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggleGamePlay}>Play </Button>
        </div>
    </Container>
    )
}

export default StartGame

const Container = styled.div`
    width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
        text-transform: uppercase;
    }
`;

const Button = styled.button`
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