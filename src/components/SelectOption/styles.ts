import styled from "styled-components"

export const Container = styled.div<{ selected: boolean }> `
    display: flex;
    border: 2px solid ${props => props.selected ? "#25CD89" : "#16195C"};
    border-radius: 0.62rem;
    padding: 1.25rem;
    margin-bottom: 0.93rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
    }
`

export const Icon = styled.div `
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-color: #191A59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.56rem;
`

export const Info = styled.div `
    flex: 1;
    margin-left: 1.25rem;
`

export const Title = styled.div `
    font-size: 1.06rem;
    font-weight: bold;
    margin-bottom: 0.43rem;
    color: ${({ theme }) => theme.titles};
`

export const Description = styled.div `
    font-size: 0.87rem;
    color: ${({ theme }) => theme.text};
`