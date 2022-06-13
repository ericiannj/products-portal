import React from 'react'
import { DescriptionSection, FormSection } from '@/features/Form/components'
import { FormContainer } from './styled'

const FormStructure: React.FC = () => {
    return (
        <>
            <FormContainer>
                <DescriptionSection />
                <FormSection />
            </FormContainer>
        </>
    )
}

export default FormStructure
