import colors from '@/styles/colors'
import styled from 'styled-components'

export const ProductsCardContainer = styled.div`
    height: 11rem;
    min-width: 19vw;
    border-radius: 1rem;
    background-color: white;
    margin: 1rem 1.5rem;
    margin-left: 0;
    padding: 1rem;
    cursor: pointer;

    @media (max-width: 750px) {
        min-width: 15rem;
    }
`

export const ProductsCardLine = styled.div`
    height: 1px;
    min-width: 19vw;
    border-radius: 1rem;
    border: 1px solid ${colors.gray02};
`

export const SelectionCardContainer = styled.div``

export const ProductTitle = styled.h1`
    font-size: 1.5rem;
`

export const ProductCode = styled.p`
    font-size: 1rem;
    margin-top: 0.7rem;
`

export const ProductCategory = styled.p`
    font-size: 1rem;
    margin-top: 0.7rem;
`

export const ProductSupplier = styled.p`
    font-size: 1rem;
    margin-top: 0.7rem;
`

export const ProductPrice = styled.p`
    font-size: 1rem;
    margin-top: 0.7rem;
`

export const DeleteButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    height: 1px;
    float: right;
`

export const TrashIcon = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`
