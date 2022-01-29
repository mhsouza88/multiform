import styled from "styled-components"

export const Container = styled.div `
    padding: 1.56rem 0;
    border-bottom: 1px solid #16195C;

    @media (max-width: 780px) {
        border-bottom: none;
        }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.75rem;

        @media (max-width: 780px) {
            text-align: center;
        }
    }

    p {
        font-size: 0.87rem;
        color: ${({ theme }) => theme.text};
        
        @media (max-width: 780px) {
            text-align: center;
        }
    }

    @media (max-width: 780px) {
        padding: 1.56rem;
    }
`