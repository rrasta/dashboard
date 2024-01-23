import styled from '@emotion/styled'

import { InputVariant } from '../../types/common.type.ts'

export const DropdownStyled = styled('div')<{ variant: InputVariant }>`
  background-color: var(
    ${({ variant }) =>
      variant === 'primary' ? '--ui-color-input-bg' : '--ui-color-secondary-20'}
  );

  padding: var(--ui-size-xs) var(--ui-size-sm);
  border-radius: var(--ui-border-radius-sm);

  display: flex;
  align-items: center;
  gap: var(--ui-size-sm);
`

export const LabelStyled = styled('label')``

export const ActionIcon = styled('div')``
