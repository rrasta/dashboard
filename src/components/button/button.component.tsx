import React from 'react'

import { ButtonStyled } from './button.style'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled
}) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
