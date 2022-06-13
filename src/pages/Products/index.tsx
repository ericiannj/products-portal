import React from 'react'
import { ProductsStructure } from '@/features/ProductList/components'
import { ProductsPageContainer } from './styled'

const ProductsPage: React.FC = () => {
    return (
        <>
            <ProductsPageContainer>
                <ProductsStructure />
            </ProductsPageContainer>
        </>
    )
}

export default ProductsPage
