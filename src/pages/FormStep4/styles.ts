import styled from "styled-components"

export const Container = styled.div `
    p {
        font-size: 0.81rem;
        color: ${({ theme }) => theme.text};

        @media (max-width: 780px) {
        margin: 1rem;
        }
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.62rem;

        @media (max-width: 780px) {
        margin: 1rem;
        }
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 1.87rem 0;

        @media (max-width: 780px) {
        margin: 1rem;
        }
    }

    label {
        font-size: 0.81rem;
        display: block;
        margin-bottom: 1.25rem;

        @media (max-width: 780px) {
        margin: 1rem;
        }

        input {
            display: block;
            margin-top: 0.43rem;
            box-sizing: border-box;
            width: 100%;
            padding: 1.25rem 0.62rem;
            border: 2px solid #25CD89;
            border-radius: 0.62rem;
            color: ${({ theme }) => theme.text};
            outline: 0;
            font-size: 0.93rem;
            background-color: ${({ theme }) => theme.background};
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 0.87rem;
        font-weight: bold;
        padding: 1.25rem 2.5rem;
        border: 0;
        border-radius: 1.87rem;
        cursor: pointer;
        margin-top: 1.87rem
    }

    .backButton {
        font-size: 1rem;
        text-decoration: none;
        padding: 1.25rem 2.5rem;
        color: ${({ theme }) => theme.text};
    }
`