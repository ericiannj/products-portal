import styled from 'styled-components'

export const FormSectionContainer = styled.div`
    width: 45vw;
    background-color: white;
    padding: 4rem 3rem;
    border-radius: 0 1rem 1rem 0;
    align-items: center;
    display: block;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 750px) {
        border-radius: 1rem;
        min-width: 22rem;
        align-items: center;
        margin: auto;
    }
`

export const FormDataContainer = styled.div`
    width: 35vw;
    padding: 2rem 2rem;
    border-radius: 1rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 750px) {
        border-radius: 1rem;
        min-width: 15rem;
        align-items: center;
        margin: auto;
    }
`
