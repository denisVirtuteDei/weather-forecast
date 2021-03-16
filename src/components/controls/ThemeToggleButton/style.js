import styled from 'styled-components'

export const Button = styled.button`
    background: ${({ theme }) => theme.background};
    border: none;
    color: ${({ theme }) => theme.text};
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.6rem;
`