import React from 'react'
import {
    DeleteButton,
    ProductCategory,
    ProductCode,
    ProductPrice,
    ProductsCardContainer,
    ProductsCardLine,
    ProductSupplier,
    ProductTitle,
    SelectionCardContainer,
    TrashIcon,
} from './styled'
import Trash from '@/assets/icons/trash-icon.png'

type ICardProps = {
    title: string
    code: string
    category: string
    supplier: string
    price: string
    onClick: () => void
    onOpenModal: () => void
}

const ProductCard: React.FC<ICardProps> = ({
    title,
    code,
    category,
    supplier,
    price,
    onClick,
    onOpenModal,
}) => {
    return (
        <>
            <ProductsCardContainer>
                <DeleteButton onClick={onClick}>
                    <TrashIcon src={Trash} />
                </DeleteButton>
                <SelectionCardContainer onClick={onOpenModal}>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductsCardLine />
                    <ProductCode>{code}</ProductCode>
                    <ProductCategory>{category}</ProductCategory>
                    <ProductSupplier>{supplier}</ProductSupplier>
                    <ProductPrice>{price}</ProductPrice>
                </SelectionCardContainer>
            </ProductsCardContainer>
        </>
    )
}

export default ProductCard
