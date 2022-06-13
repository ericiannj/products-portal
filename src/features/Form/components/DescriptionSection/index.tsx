import React from 'react'
import {
    DescriptionImage,
    DescriptionImageContainer,
    DescriptionSectionContainer,
} from './styled'

import DescriptionImg from '@/assets/images/description.png'

const DescriptionSection: React.FC = () => {
    return (
        <>
            <DescriptionSectionContainer>
                <DescriptionImageContainer>
                    <DescriptionImage src={DescriptionImg} />
                </DescriptionImageContainer>
            </DescriptionSectionContainer>
        </>
    )
}

export default DescriptionSection
