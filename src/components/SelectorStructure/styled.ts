import colors from '@/styles/colors'
import styled from 'styled-components'

export const SelectorContainer = styled.div`
    display: grid;
    margin-bottom: 1rem;
`

export const Selector = styled.select`
    height: 2rem;
    width: 20rem;
    border-style: none;
    border-radius: 0.5rem;
    outline: 0;
    padding-left: 1rem;
    cursor: pointer;

    border: 1px solid ${colors.gray02};
    outline: none;

    &:focus {
        border: 1px solid ${colors.primary};
    }
`

export const SelectorLabel = styled.label`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`
