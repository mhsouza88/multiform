import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 0.81rem;
        color: ${({ theme }) => theme.text};
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.62rem;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 1.87rem 0;
    }

    label {
        font-size: 0.81rem;
        color: ${({ theme }) => theme.text};

        input {
            display: block;
            margin-top: 0.43rem;
            box-sizing: border-box;
            width: 100%;
            padding: 1.25rem 0.62rem;
            border: 2px solid #25CD89;
            border-radius: 0.62px;
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
        margin-top: 1.87rem;

        @media (max-width: 780px) {
        margin-bottom: 1rem;
        }
    }

    .backButton {
        font-size: 1rem;
        text-decoration: none;
        padding: 1.25rem 2.5rem;
        color: ${({ theme }) => theme.text};
    }
`