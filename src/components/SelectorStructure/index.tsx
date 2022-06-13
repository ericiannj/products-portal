import React from 'react'
import { Selector, SelectorContainer, SelectorLabel } from './styled'

type ISelectorProps = {
    label: string
    onChange: (event: any) => void
}

const SelectorStructure: React.FC<ISelectorProps> = ({ label, onChange }) => {
    const options = [
        {
            value: 'Eletrônico',
            category: 'Eletrônico',
        },
        {
            value: 'Roupas',
            category: 'Roupas',
        },
        {
            value: 'Cosméticos',
            category: 'Cosméticos',
        },
        {
            value: 'Livros',
            category: 'Livros',
        },
    ]

    return (
        <>
            <SelectorContainer>
                <SelectorLabel>{label}</SelectorLabel>
                <Selector onChange={onChange}>
                    {options.map(op => (
                        <option key={op.value} value={op.value}>
                            {op.category}
                        </option>
                    ))}
                </Selector>
            </SelectorContainer>
        </>
    )
}

export default SelectorStructure
