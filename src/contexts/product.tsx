import { Product, ProductContextData } from '@/types/IProducts'
import React, { ReactNode, useContext, useEffect, useState } from 'react'

type ProductProviderProps = {
    children: ReactNode
}

export const ProductContext = React.createContext<ProductContextData>(
    {} as ProductContextData
)

export const ProductProvider: React.FC<ProductProviderProps> = ({
    children,
}: ProductProviderProps) => {
    const productsString = localStorage.getItem('products')
    const currentProducts = JSON.parse(productsString!)
    const [products, setProducts] = useState<Product[]>(currentProducts)
    const [editedProduct, setEditedProduct] = useState({
        name: '',
        code: '',
        category: '',
        supplier: '',
        price: '',
    })
    const [modalIsOpen, setIsOpen] = React.useState(false)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const dispatchProducts = (product: Product) => {
        setProducts(products => [...products, product])
    }

    const dispatchRemoveProduct = (deletedProduct: Product) => {
        const filteredArray = products.filter(
            product => product.code !== deletedProduct.code
        )
        setProducts(filteredArray)
    }

    const updateProduct = () => {
        const itemsArray = products

        products.map((product, index: number) => {
            if (product.code === editedProduct.code) {
                const itemRemoved = itemsArray.splice(index, 1, editedProduct)
                console.log(itemRemoved)
                setProducts(itemsArray)
            }
            closeModal()
        })

        closeModal()
    }

    const openModal = (editedProduct: Product) => {
        setIsOpen(true)
        setEditedProduct(editedProduct)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <ProductContext.Provider
            value={[
                products,
                {
                    modalIsOpen,
                    editedProduct,
                    setEditedProduct,
                    updateProduct,
                    openModal,
                    closeModal,
                    dispatchProducts,
                    dispatchRemoveProduct,
                },
            ]}
        >
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(): ProductContextData {
    return useContext(ProductContext)
}
