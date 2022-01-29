import styled from "styled-components"

export const Button = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    button {
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.titles};
        border: none;
    }
    
`