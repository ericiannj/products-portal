import { Header, InputStructure, SelectorStructure } from '@/components'
import DefaultButton from '@/components/Button'
import { useProductContext } from '@/contexts/product'
import { Product } from '@/types/IProducts'
import React from 'react'
import Modal from 'react-modal'
import { CloseIcon, Closeutton, ModalContainer } from './styled'
import CloseIc from '@/assets/icons/close-icon.png'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

const EditionModal: React.FC = () => {
    const [
        ,
        {
            editedProduct,
            setEditedProduct,
            updateProduct,
            modalIsOpen,
            closeModal,
        },
    ] = useProductContext()

    const submitProduct = () => {
        updateProduct()
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Closeutton onClick={closeModal}>
                    <CloseIcon src={CloseIc} />
                </Closeutton>
                <ModalContainer>
                    <Header placeholder="Update Product" />
                    <InputStructure
                        label="Product Name"
                        value={editedProduct.name}
                        onChange={e =>
                            setEditedProduct((prevState: Product) => {
                                return { ...prevState, name: e.target.value }
                            })
                        }
                    />
                    <InputStructure
                        label="Product Name"
                        value={editedProduct.code}
                        onChange={e => {
                            const categoryValue = e.target.value
                            setEditedProduct((prevState: Product) => {
                                return {
                                    ...prevState,
                                    category: categoryValue,
                                }
                            })
                        }}
                    />
                    <SelectorStructure
                        label="Product Category"
                        onChange={e => {
                            const categoryValue = e.target.value
                            setEditedProduct((prevState: Product) => {
                                return {
                                    ...prevState,
                                    category: categoryValue,
                                }
                            })
                        }}
                    />
                    <InputStructure
                        label="Product Supplier"
                        value={editedProduct.supplier}
                        onChange={e =>
                            setEditedProduct((prevState: Product) => {
                                return {
                                    ...prevState,
                                    supplier: e.target.value,
                                }
                            })
                        }
                    />
                    <InputStructure
                        label="Price"
                        value={editedProduct.price}
                        onChange={e =>
                            setEditedProduct((prevState: Product) => {
                                return { ...prevState, price: e.target.value }
                            })
                        }
                    />
                    <DefaultButton
                        content="Register"
                        onClick={submitProduct}
                        disabled={
                            editedProduct.name == '' ||
                            editedProduct.supplier == '' ||
                            editedProduct.price == '' ||
                            editedProduct.code == ''
                        }
                    />
                </ModalContainer>
            </Modal>
        </div>
    )
}

export default EditionModal
