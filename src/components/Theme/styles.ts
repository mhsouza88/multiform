import styled from "styled-components"

export const Container = styled.div `
    background-color: ${({ theme }) => theme.background};
    color: #FFF;
    max-height: 100vh;
`

export const Area = styled.div `
    margin: auto;
    max-width: 61.25rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Steps = styled.div `
    flex: 1;
    display: flex;

    @media (max-width: 780px) {
        display: flex;
        flex-direction: column;
    }
`

export const Sidebar = styled.div `
    width: 15.62rem;
    border-right: 1px solid #16195C;
    
    @media (max-width: 780px) {
        display: flex;
        flex-direction: row;
        width: 10rem;
        margin: 1rem;
        border-right: none;
    }
`

export const Page = styled.div `
    flex: 1;
    padding-left: 2.5rem;
    padding-top: 2.5rem;
    
    @media (max-width: 780px) {
        flex: 2;
        display: flex;
        flex-direction: row;
        padding: 2rem;
    }
`