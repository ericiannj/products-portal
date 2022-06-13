import styled from 'styled-components'
import colors from '@/styles/colors'

export const InputContainer = styled.div`
    display: grid;
    margin-bottom: 0.75rem;
`

export const Input = styled.input`
    height: 2rem;
    width: 20rem;
    border-style: none;
    border-radius: 0.5rem;
    outline: 0;
    padding-left: 1.5rem;

    border: 1px solid ${colors.gray02};
    outline: none;

    &:focus {
        border: 1px solid ${colors.primary};
    }
`

export const InputLabel = styled.label`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`
