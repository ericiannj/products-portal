export type Product = {
    name: string
    code: string
    category: string
    supplier: string
    price: string
}

export type ProductDispatch = {
    modalIsOpen: boolean
    editedProduct: Product
    setEditedProduct: any
    updateProduct: any
    openModal: (editedProduct: Product) => void
    closeModal: () => void
    dispatchProducts: (product: Product) => void
    dispatchRemoveProduct: (deletedProduct: Product) => void
}

export type ProductContextData = [Product[], ProductDispatch]
