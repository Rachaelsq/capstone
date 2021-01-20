import styled from "styled-components";

export const ButtonContainer = styled.button`
    font-size: 1.4rem;
    background: linear-gradient(180deg, #7F7EFF 0%, rgba(255, 255, 255, 0) 100%), #A390E4;
    box-shadow: 0px 4px 10px 3px #1F7A8C, inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-family: "Lato", sans-serif important!;

    border: none;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: #8C86C6;
        border-radius: 5px;
        color: white;
    }
    color: white;
    }
    &:focus{
    outline: none;
    }
`;
//
