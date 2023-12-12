import React from 'react'

import { BsHandbag } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { FiUsers, FiFolderMinus } from 'react-icons/fi'
import { IoMdLogOut } from 'react-icons/io'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { TbCategory } from 'react-icons/tb'

import {
  MenuStyled,
  Logo,
  MenuItem,
  MenuList,
  LogoutButton
} from './menu.style.tsx'

export const Menu: React.FC = () => {
  return (
    <MenuStyled>
      <Logo>
        <img src="Metrix.png" alt="logo"></img>
      </Logo>
      <MenuList>
        <MenuItem>
          <TbCategory /> Dashboard
        </MenuItem>
        <MenuItem>
          <BsHandbag /> Orders
        </MenuItem>
        <MenuItem>
          <FiUsers /> Customers
        </MenuItem>
        <MenuItem>
          <FiFolderMinus /> Inventory
        </MenuItem>
        <MenuItem>
          <IoChatbubbleEllipsesOutline /> Conversations
        </MenuItem>
        <MenuItem>
          <CiSettings /> Settings
        </MenuItem>
      </MenuList>

      <LogoutButton>
        <IoMdLogOut /> Logout
      </LogoutButton>
    </MenuStyled>
  )
}
