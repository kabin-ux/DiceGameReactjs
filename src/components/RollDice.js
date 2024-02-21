import React from 'react';
import styled from 'styled-components';
import dice_1 from '../imgs/dice_img/dice_1.png';
import dice_2 from '../imgs/dice_img/dice_2.png';
import dice_3 from '../imgs/dice_img/dice_3.png';
import dice_4 from '../imgs/dice_img/dice_4.png';
import dice_5 from '../imgs/dice_img/dice_5.png';
import dice_6 from '../imgs/dice_img/dice_6.png';

const RollDice = ({currentDice, rollDice}) => {

 
  const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];


  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src = {diceImages[currentDice - 1]} alt=''/>
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`;

