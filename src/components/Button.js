import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4 rem;
    background: transparent;
    border: 0.05rem solid var(--mainWhite);
    border-color: ${props => props.cart? "Green":"var(--mainWhite)"};
    color: green;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 05.rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: #dddada;
    }
    &:focus{
        outline: none;
    }
`;
