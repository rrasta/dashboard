import React from 'react'

import { AvatarStyled } from './avatar.style.tsx'

interface IAvatarProps {
  image: string
}

export const Avatar: React.FC<IAvatarProps> = ({ image }) => {
  return <AvatarStyled src={image} />
}
