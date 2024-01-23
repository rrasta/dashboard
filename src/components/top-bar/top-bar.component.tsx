import React from 'react'

import { TopBarStyled } from './top-bar.style.tsx'
import face from '../../assets/example-face.jpg'
import { Avatar } from '../avatar/avatar.component.tsx'
import { Dropdown } from '../dropdown/dropdown.component.tsx'
import { BellIcon } from '../icons/icons.component.tsx'
import { H3 } from '../text/text.component.tsx'

interface ITopBarProps {
  title: string
}

export const TopBar: React.FC<ITopBarProps> = ({ title }) => {
  return (
    <TopBarStyled>
      <H3>{title}</H3>
      <Dropdown variant="secondary" />
      <BellIcon />
      <Avatar image={face} />
    </TopBarStyled>
  )
}
