import React from 'react'
import { Heading } from './styled'

type IHeadingProps = {
    placeholder: string
}

const Header: React.FC<IHeadingProps> = ({ placeholder }) => {
    return (
        <>
            <Heading>{placeholder}</Heading>
        </>
    )
}

export default Header
