import React from 'react'
import { Input, InputContainer, InputLabel } from './styled'

type IInputProps = {
    label: string
    value: string
    onChange: (event: any) => void
}

const InputStructure: React.FC<IInputProps> = ({ label, value, onChange }) => {
    return (
        <>
            <InputContainer>
                <InputLabel>{label}</InputLabel>
                <Input onChange={onChange} value={value} />
            </InputContainer>
        </>
    )
}

export default InputStructure
