import React from 'react'

import { DropdownStyled, LabelStyled } from './dropdown.style.tsx'
import { InputVariant } from '../../types/common.type.ts'
import { ArrowDown } from '../icons/icons.component.tsx'
import { InputPlaceholder } from '../text/text.component.tsx'

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
      <LabelStyled>
        <InputPlaceholder variant={variant}>{label}</InputPlaceholder>
      </LabelStyled>
      <ArrowDown />
      {/*<DropdownListStyled>*/}
      {/*  <DropdownItem>Item 1</DropdownItem>*/}
      {/*  <DropdownItem>Item 2</DropdownItem>*/}
      {/*  <DropdownItem>Item 3</DropdownItem>*/}
      {/*  <DropdownItem>Item 4</DropdownItem>*/}
      {/*</DropdownListStyled>*/}
    </DropdownStyled>
  )
}
