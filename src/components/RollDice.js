import styled from 'styled-components';
import dice1 from '../imgs/dice_img/dice_1.png';
import dice2 from '../imgs/dice_img/dice_2.png';
import dice3 from '../imgs/dice_img/dice_3.png';
import dice4 from '../imgs/dice_img/dice_4.png';
import dice5 from '../imgs/dice_img/dice_5.png';
import dice6 from '../imgs/dice_img/dice_6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const RollDice = ({currentDice, rollDice}) => {

    

    return (
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={diceImages[currentDice - 1]} alt='dice' />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    );
};

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;
