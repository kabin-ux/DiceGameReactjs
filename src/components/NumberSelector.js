import styled from 'styled-components';

const NumberSelector = ({setError, selectedNumber, setSelectedNumber, error}) => {
    const array = [1,2,3,4,5,6]

    const numberSelectorHandler =  (item) => {
        setSelectedNumber(item);
        setError('');
    };
    return (
        <NumberSelectorContainer>
            <p>{error}</p>
        <div className='flex'>
            {
                array.map((item, index) =>
                 (<Box  
                    isSelected = {item === selectedNumber} 
                    key={index} onClick={() => numberSelectorHandler(item)}>{item}
                    </Box>) )
            }
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }

`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? 'black' : 'white') };
    color: ${(props) => (props.isSelected ? 'white' : 'black') };

`;