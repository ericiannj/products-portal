import React from 'react'
import { Button } from './styled'

type IButtonProps = {
    content: string
    onClick: () => void
    disabled: boolean
}

const DefaultButton: React.FC<IButtonProps> = ({
    content,
    onClick,
    disabled,
}) => {
    return (
        <>
            <Button onClick={onClick} disabled={disabled}>
                {content}
            </Button>
        </>
    )
}

export default DefaultButton
