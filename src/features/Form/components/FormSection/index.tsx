import { Header, InputStructure, SelectorStructure } from '@/components'
import DefaultButton from '@/components/Button'
import NavLink from '@/components/NavLink'
import { useProductContext } from '@/contexts/product'
import React, { useState } from 'react'
import { FormDataContainer, FormSectionContainer } from './styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductsIcon from '@/assets/icons/products-icon.png'

const FormSection: React.FC = () => {
    const [product, setProduct] = useState({
        name: '',
        code: '',
        category: 'Eletronic',
        supplier: '',
        price: '',
    })
    const [products, { dispatchProducts }] = useProductContext()

    const submitProduct = () => {
        if (products.every(element => element.code !== product.code)) {
            dispatchProducts(product)
            setProduct({
                name: '',
                code: '',
                category: 'Eletronic',
                supplier: '',
                price: '',
            })
            toast.success('Registered Product!', {
                position: toast.POSITION.TOP_CENTER,
            })
        } else {
            toast.error('The code is already in use.', {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }

    return (
        <>
            <FormSectionContainer>
                <FormDataContainer>
                    <NavLink
                        to="products"
                        linkName="Registered Products"
                        icon={ProductsIcon}
                    />
                    <Header placeholder="Register a New Product" />
                    <InputStructure
                        label="Product Name"
                        value={product.name}
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, name: e.target.value }
                            })
                        }
                    />
                    <InputStructure
                        label="Product Code"
                        value={product.code}
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, code: e.target.value }
                            })
                        }
                    />
                    <SelectorStructure
                        label="Product Category"
                        onChange={e => {
                            const categoryValue = e.target.value
                            setProduct(prevState => {
                                return {
                                    ...prevState,
                                    category: categoryValue,
                                }
                            })
                        }}
                    />
                    <InputStructure
                        label="Product Supplier"
                        value={product.supplier}
                        onChange={e =>
                            setProduct(prevState => {
                                return {
                                    ...prevState,
                                    supplier: e.target.value,
                                }
                            })
                        }
                    />
                    <InputStructure
                        label="Price"
                        value={product.price}
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, price: e.target.value }
                            })
                        }
                    />
                    <DefaultButton
                        content="Register"
                        onClick={submitProduct}
                        disabled={
                            product.name == '' ||
                            product.supplier == '' ||
                            product.price == '' ||
                            product.code == ''
                        }
                    />
                </FormDataContainer>
                <ToastContainer />
            </FormSectionContainer>
        </>
    )
}

export default FormSection
