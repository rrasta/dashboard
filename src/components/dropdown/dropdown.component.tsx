import React from 'react'

import { DropdownStyled, LabelStyled } from './dropdown.style.tsx'
import { InputVariant } from '../../types/common.type.ts'


interface IDropdownProps {
  label?: string
  variant?: InputVariant
}

export const Dropdown: React.FC<IDropdownProps> = ({
  label = 'My dropdown',
  variant = 'primary'
}) => {
  return (
    <DropdownStyled variant={variant}>

    </DropdownStyled>
  )
}
