import styled from 'styled-components'
import colors from '@/styles/colors'

export const Button = styled.button`
    height: 2rem;
    width: 20rem;
    background-color: ${colors.primary};
    color: white;
    border-radius: 1rem;
    border-style: none;
    margin-top: 1rem;
    cursor: pointer;

    &:disabled {
        background-color: ${colors.disabledGray};
        color: ${colors.gray03};
        cursor: default;
    }
`
