import colors from '@/styles/colors'
import styled from 'styled-components'

export const DescriptionSectionContainer = styled.div`
    width: 45vw;
    background-color: ${colors.primary};
    border-radius: 1rem 0 0 1rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 750px) {
        display: none;
    }
`

export const DescriptionImageContainer = styled.div``

export const DescriptionImage = styled.img`
    max-height: 60vh;
    max-width: 40vw;
`
