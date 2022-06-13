import colors from '@/styles/colors'
import styled from 'styled-components'

export const ProductsContainer = styled.div`
    height: 80vh;
    width: 90vw;
    min-height: 28rem;
    border-radius: 1rem;
    background-color: white;
    margin-top: 6rem;
    margin-bottom: 4rem;

    @media (max-width: 750px) {
        min-width: 600px;
        margin: auto;
        margin-right: 3rem;
        margin-left: 3rem;
    }
`

export const ProductsHeaderContainer = styled.div`
    height: 10vh;
    min-height: 4rem;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    background-color: ${colors.gray02};
    padding: 2rem;

    @media (max-width: 750px) {
        width: 670px;
        margin: auto;
    }
`

export const ProductsListContainer = styled.div`
    height: 70vh;
    width: 90vw;
    min-height: 25rem;
    border-radius: 1rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    background-color: ${colors.gray01};
    padding: 1.5rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: initial;
    overflow: scroll;
    overflow-x: hidden;

    @media (max-width: 750px) {
        width: 670px;
        margin: auto;
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.primary};
        border-radius: 20px;
    }
`
