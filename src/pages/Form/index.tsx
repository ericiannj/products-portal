import React from 'react'
import FormStructure from '@/features/Form/components/FormStructure'
import { FormPageContainer } from './styled'

const FormPage: React.FC = () => {
    return (
        <>
            <FormPageContainer>
                <FormStructure />
            </FormPageContainer>
        </>
    )
}

export default FormPage
