import { Header } from '@/components'
import React from 'react'
import {
    ProductsContainer,
    ProductsHeaderContainer,
    ProductsListContainer,
} from './styled'
import { ProductCard, EditionModal } from '@/features/ProductList/components'
import NavLink from '@/components/NavLink'
import { useProductContext } from '@/contexts/product'
import { Product } from '@/types/IProducts'
import FormIcon from '@/assets/icons/form-icon.png'

const ProductsStructure: React.FC = () => {
    const [products, { openModal, dispatchRemoveProduct }] = useProductContext()

    const removeProduct = (deletedProduct: Product) => {
        dispatchRemoveProduct(deletedProduct)
    }

    return (
        <>
            <ProductsContainer>
                <ProductsHeaderContainer>
                    <Header placeholder="Products List" />
                    <NavLink
                        icon={FormIcon}
                        to="/"
                        linkName="Return to register product"
                    />
                </ProductsHeaderContainer>
                <ProductsListContainer>
                    {products.map(product => (
                        <>
                            <ProductCard
                                key={product.code}
                                title={
                                    product.name.length > 13
                                        ? product.name.substring(0, 13) + '...'
                                        : product.name
                                }
                                category={product.category}
                                supplier={
                                    product.supplier.length > 13
                                        ? product.supplier.substring(0, 13) +
                                          '...'
                                        : product.supplier
                                }
                                price={'$ ' + product.price}
                                code={product.code}
                                onClick={() => removeProduct(product!)}
                                onOpenModal={() => openModal(product!)}
                            />
                        </>
                    ))}
                </ProductsListContainer>
                <EditionModal />
            </ProductsContainer>
        </>
    )
}

export default ProductsStructure
