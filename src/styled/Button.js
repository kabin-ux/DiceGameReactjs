import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    height: 44px;
    background-color: black;
    border: none;
    font-size: 16px ;
    transition: 0.3s background ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 4px solid black;
        color: black;
        transition: 0.3s background ease-in-out;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
   &:hover{
        background-color: black;
        border: 4px solid transparent;
        color: wheat;
    }
`;