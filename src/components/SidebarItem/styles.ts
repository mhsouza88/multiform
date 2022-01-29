import styled from "styled-components"

export const Container = styled.div `
    margin: 1.87rem 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div `
    flex: 1;
    margin-right: 1.25rem;

    @media (max-width: 780px) {
        display: none;
    }
`

export const Title = styled.div `
    text-align: right;
    font-weight: bold;
    margin-bottom: 0.31rem;
    font-size: 0.93rem;
    color: ${({ theme }) => theme.titles};
`

export const Description = styled.div `
    text-align: right;
    font-size: 0.81rem;
    color: ${({ theme }) => theme.text};

    @media (max-width: 780px) {
        display: none;
    }
`

export const Icon = styled.div<{ active: boolean }> `
    width: 3.12rem;
    height: 3.12rem;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C' };
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 780px) {
        flex-direction: row;
        margin: 0 2rem 0 2rem;
    }
`

export const Point = styled.div<{ active: boolean }> `
    width: 0.37rem;
    height: 0.37rem;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 1.87rem;
    margin-right: -0.37rem;
    background-color: ${props => props.active ? '#25CD89' : '#02044A' };

    @media (max-width: 780px) {
        display: none;
    }
`