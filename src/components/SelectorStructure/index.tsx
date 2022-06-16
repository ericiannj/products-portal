import React from 'react'
import { Selector, SelectorContainer, SelectorLabel } from './styled'

type ISelectorProps = {
    label: string
    onChange: (event: any) => void
}

const SelectorStructure: React.FC<ISelectorProps> = ({ label, onChange }) => {
    const options = [
        {
            value: 'Eletronic',
            category: 'Eletronic',
        },
        {
            value: 'Clothes',
            category: 'Clothes',
        },
        {
            value: 'Cosmetics',
            category: 'Cosmetics',
        },
        {
            value: 'Books',
            category: 'Books',
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
